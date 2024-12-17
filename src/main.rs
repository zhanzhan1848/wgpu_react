#[allow(non_snake_case)]
use WGPU::run;

fn main() {
    pollster::block_on(run());
}