
uniform vec2    u_resolution;
uniform float   u_time;

void main() {
    vec3 color = vec3(0.0); 
    vec2 rg = gl_FragCoord.xy / u_resolution;
    
    //color.rg = rg;
    //color.b = rg.y - 1 * -1;
    color.r = rg.y * -1;

    gl_FragColor = vec4(color, 1.0);
}
