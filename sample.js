var vertexShader: ` // glsl
  attribute vec3 position;
  attribute float time;

  uniform float clock;

  varying float age;

  void main() {
    age = clock - time;
    gl_Position = vec4(position, 1.0);
  }
`

var fragmentShader: `// glsl
  varying float age;
  void main() {
    if (age < 0) { discard; }
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
`

function foo() {
  var x = 0;
  for (var i = 0; i < 10; i++) {
    x += i;
  }
  console.log(i);
}
