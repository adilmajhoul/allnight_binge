"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const [mytheme, setmyTheme] = useState("light");

  const col = "primary";

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
        <button className="theme-light bg-warning-500  border">button</button>

        <div>
          The current theme is: {theme}
          <Button onClick={() => setTheme("light")}>Light Mode</Button>
          <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
        </div>

        <div>
          <div data-theme="light">
            light
            <div class="bg-primary-600">800</div>
            <div class="bg-primary-600">600</div>
            <div class="bg-primary-600">300</div>
            <div class="bg-primary-600">100</div>
          </div>

          <div data-theme="dark">
            dark
            <div class="bg-primary-600">800</div>
            <div class="bg-primary-600">600</div>
            <div class="bg-primary-600">300</div>
            <div class="bg-primary-600">100</div>
          </div>

          <div data-theme={theme}>
            based on real theme which is --- {theme}
            <div class="bg-primary-600">800</div>
            <div class="bg-primary-600">600</div>
            <div class="bg-primary-600">300</div>
            <div class="bg-primary-600">100</div>
          </div>
        </div>
      </div>
    </section>
  );
}
