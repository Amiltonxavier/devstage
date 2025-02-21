import { ArrowRight, Copy } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/IconButton";

export default function Home() {
  return (
    <main>
      <div className="text-amber-500 font-heading">
        <Button>
          Enviar
          <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>
      </div>
    </main>
  );
}
