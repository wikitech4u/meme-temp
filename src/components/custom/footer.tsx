import { appConfig } from "@/config";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import Blur from "./blur";

const Footer = () => {
  return (
    <footer className="px-6 py-16 relative">
      <h1 className="text-4xl md:text-6xl text-center font-bold">
        {appConfig.footer.title}
      </h1>
      <Blur img="/garden.gif"/>

      <div className="grid md:grid-cols-2 p-1 md:p-8">
        {appConfig.footer.cards.map((card, i) => (
          <Card key={i} className="bg-background/10 backdrop-blur-3xl border-primary/40 gap-0 rounded-none w-full h-full">
            <CardHeader>
              <CardTitle className="w-fit rounded-lg bg-black/10 backdrop-blur-2xl p-2 border-2 border-primary/20">
                {<card.icon className="text-primary"/>}
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-4 pb-4 space-y-4">
              <h3 className="text-2xl text-primary">{card.title}</h3>
              <h5 className="text-primary">{card.subTitle}</h5>
              <Link href={card.url} target="_blank">
                <Button variant={"link"}>{card.btn}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
