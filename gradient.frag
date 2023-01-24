#version 300 es
precision highp float;

uniform vec2 u_resolution;
in vec2 v_texcoord;
in float u_time;
out vec4 fragColor;

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution;
  fragColor = vec4(uv.x, uv.y, 1, 1);
}

/*
メモ
glsl 300でもgl_FragCoordはそのまま
出力する方の変数はgl_FragColor固定ではなく、自分で指定できるようになった。ただし、out vec4 *** として宣言する必要あり
その際、通常のユースケースではmain関数の引数にする必要あり

また、fragment shader内でattrivuteを使用する際に、拡張機能の説明にある変数の接頭辞をa->vに変換する必要がある
*/