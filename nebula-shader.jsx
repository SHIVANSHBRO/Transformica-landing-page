/* ------------------------------------------------------------------ *
 *  NebulaShader — domain-warped WebGL2 nebula background              *
 *  Reacts to cursor position (lerped) and click ripples.              *
 *  Pauses automatically when off-screen (IntersectionObserver).       *
 * ------------------------------------------------------------------ */

const NEBULA_VERT = `#version 300 es
in vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }`;

const NEBULA_FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2  u_res;
uniform vec2  u_smoothMouse;
uniform float u_time;
uniform vec4  u_click;

#define DEEP   vec3(0.012, 0.024, 0.090)
#define DARK   vec3(0.039, 0.071, 0.188)
#define BLUE   vec3(0.165, 0.420, 1.000)
#define LIGHT  vec3(0.435, 0.639, 1.000)
#define TEAL   vec3(0.098, 0.890, 0.647)

float hash12(vec2 p){ vec3 q = fract(vec3(p.xyx)*0.1031); q += dot(q, q.yzx+33.33); return fract((q.x+q.y)*q.z); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x),
             mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 aspect = vec2(u_res.x/u_res.y, 1.0);
  vec2 p = (uv - 0.5) * aspect;
  vec2 m = (u_smoothMouse - 0.5) * aspect;

  vec2 q = vec2(fbm(p*1.7 + u_time*0.06),
                fbm(p*1.7 + vec2(5.2,1.3) + u_time*0.07));
  vec2 r = vec2(fbm(p*1.7 + 3.0*q + m*1.8 + u_time*0.04),
                fbm(p*1.7 + 3.0*q + vec2(8.3,2.8) - m*1.8 + u_time*0.05));
  float n = fbm(p*1.7 + 4.0*r);

  vec3 col = DEEP;
  col = mix(col, DARK,  smoothstep(0.10, 0.50, n));
  col = mix(col, BLUE,  smoothstep(0.40, 0.78, n) * 0.85);
  col = mix(col, LIGHT, smoothstep(0.68, 0.95, n) * 0.55);
  col = mix(col, TEAL,  smoothstep(0.80, 1.00, n*r.y));

  float md = length(p - m);
  col += BLUE * 0.20 * exp(-md*3.0);

  float ct = u_time - u_click.z;
  if(ct > 0.0 && ct < 4.0){
    vec2 cp = (u_click.xy - 0.5) * aspect;
    float cd = length(p - cp);
    float ring = exp(-pow((cd - ct*0.45)*7.0, 2.0));
    col += mix(LIGHT, TEAL, 0.4) * ring * exp(-ct*0.7);
  }

  float v = smoothstep(1.0, 0.3, length((uv-0.5)*vec2(1.3,1.0)));
  col *= 0.85 + 0.25*v;

  fragColor = vec4(col, 1.0);
}`;

function NebulaShader({ className = '' }) {
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef({
    mouse: [0.5, 0.5],
    smooth: [0.5, 0.5],
    click: [0.5, 0.5, -10, 0],
    visible: true,
    failed: false,
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: true, premultipliedAlpha: false });
    if (!gl) { stateRef.current.failed = true; return; }

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('[nebula] shader compile:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    }
    const v = compile(gl.VERTEX_SHADER, NEBULA_VERT);
    const f = compile(gl.FRAGMENT_SHADER, NEBULA_FRAG);
    if (!v || !f) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, v); gl.attachShader(prog, f);
    gl.bindAttribLocation(prog, 0, 'a_pos');
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('[nebula] link:', gl.getProgramInfoLog(prog));
      return;
    }
    const u_res     = gl.getUniformLocation(prog, 'u_res');
    const u_smooth  = gl.getUniformLocation(prog, 'u_smoothMouse');
    const u_time    = gl.getUniformLocation(prog, 'u_time');
    const u_click   = gl.getUniformLocation(prog, 'u_click');

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const start = performance.now();
    let lastFrame = start;
    let raf = 0;
    let alive = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width  * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
      }
    }

    function frame() {
      if (!alive) return;
      const st = stateRef.current;
      const now = performance.now();
      const dt = (now - lastFrame) / 1000;
      lastFrame = now;

      if (st.visible) {
        const k = 1 - Math.exp(-dt * 7.5);
        st.smooth[0] += (st.mouse[0] - st.smooth[0]) * k;
        st.smooth[1] += (st.mouse[1] - st.smooth[1]) * k;

        resize();
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.useProgram(prog);
        gl.uniform2f(u_res, canvas.width, canvas.height);
        gl.uniform2f(u_smooth, st.smooth[0], st.smooth[1]);
        gl.uniform1f(u_time, (now - start) / 1000);
        gl.uniform4f(u_click, st.click[0], st.click[1], st.click[2], st.click[3]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    // Pause when hero scrolls out of view
    const io = new IntersectionObserver(entries => {
      stateRef.current.visible = entries[0].isIntersecting;
    }, { threshold: 0 });
    io.observe(canvas);

    // Mouse tracking relative to canvas
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top)  / rect.height;
      stateRef.current.mouse[0] = Math.max(-0.5, Math.min(1.5, x));
      stateRef.current.mouse[1] = Math.max(-0.5, Math.min(1.5, y));
    }
    function onDown(e) {
      const rect = canvas.getBoundingClientRect();
      // Only register click if it's inside the hero
      if (e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top  || e.clientY > rect.bottom) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      const t = (performance.now() - start) / 1000;
      stateRef.current.click = [x, y, t, stateRef.current.click[3] + 1];
    }
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      gl.deleteProgram(prog);
      gl.deleteShader(v); gl.deleteShader(f);
      gl.deleteBuffer(buf);
      gl.deleteVertexArray(vao);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`hero-shader ${className}`}
      aria-hidden="true"
    />
  );
}

window.NebulaShader = NebulaShader;
