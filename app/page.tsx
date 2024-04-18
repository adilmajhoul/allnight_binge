import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  const col = "secondary";

  return (
    <section className="flex flex-col  items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-wrap gap-4">
        <Button color={col} variant="bordered">
          bordered
        </Button>
        <Button color={col} variant="faded">
          faded
        </Button>
        <Button color={col} variant="flat">
          flat
        </Button>
        <Button color={col} variant="ghost">
          ghost
        </Button>
        <Button color={col} variant="light">
          light
        </Button>
        <Button color={col} variant="shadow">
          shadow
        </Button>
        <Button color={col} variant="solid">
          solid
        </Button>
      </div>
    </section>
  );
}
