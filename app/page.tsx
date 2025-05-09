import { LineShadowText } from "@/components/shadow-text";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      Coming {' '}
        <LineShadowText className="italic">
          Soon
        </LineShadowText>
    </div>
  );
}
