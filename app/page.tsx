"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("kr");
  const [isHovered, setIsHovered] = useState(false);

  const switchLanguage = (lang) => {
    setLang(lang);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-900 text-white py-4 px-6 md:px-10 flex items-center justify-between sticky top-0 z-50">
        <Link className="text-2xl font-bold" href="#">
          {lang === "kr"
            ? "김동식 포트폴리오"
            : "キム・ドンシクのポートフォリオ"}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#home">
            {lang === "kr" ? "홈" : "ホーム"}
          </Link>
          <Link className="hover:underline" href="#Projects">
            {lang === "kr" ? "프로젝트" : "プロジェクト"}
          </Link>
          <Link className="hover:underline" href="#about">
            {lang === "kr" ? "자기소개" : "自己紹介"}
          </Link>
          <Link className="hover:underline" href="#Contact">
            {lang === "kr" ? "연락처" : "連絡先"}
          </Link>
          {lang === "kr" ? (
            <Button
              className="hover:underline"
              onClick={() => switchLanguage("jp")}
            >
              JP
            </Button>
          ) : (
            <Button
              className="hover:underline"
              onClick={() => switchLanguage("kr")}
            >
              KR
            </Button>
          )}
        </nav>
        <Button className="md:hidden" variant="outline">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1" id="home">
        <section className="bg-zinc-800 text-white min-h-screen flex items-center justify-center py-20 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                {lang === "kr"
                  ? "3D 작업물 포트폴리오 by 김동식"
                  : "3Dポートフォリオ by キム・ドンシク"}
              </h1>
              <p className="text-lg md:text-xl">
                {lang === "kr"
                  ? "지금까지 작업했던 3D 프로젝트들입니다."
                  : "今まで制作した3Dプロジェクトです。"}
              </p>
              <div className="flex space-x-4">
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-zinc-100 px-6 py-3 text-black hover:bg-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:bg-gray-50 dark:hover:bg-gray-50/80 dark:focus-visible:ring-gray-50"
                  href="https://www.artstation.com/jatper"
                  target="_blank"
                >
                  {lang === "kr" ? "아트스테이션" : "アートステーション"}
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-100 px-6 py-3 text-gray-100 hover:bg-zinc-300 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 dark:border-gray-100 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-50"
                  href="#Projects"
                >
                  {lang === "kr" ? "프로젝트" : "プロジェクト"}
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <video className="h-full w-full" autoPlay loop muted playsInline>
                <source src="/jatper_html_main.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10" id="Projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              {lang === "kr" ? "프로젝트" : "プロジェクト"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                className="group"
                href="https://www.artstation.com/artwork/Vy658X"
                target="_blank"
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 1"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdna.artstation.com/p/assets/images/images/055/038/400/large/jatper-1.jpg?1704212870"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                  {lang === "kr" ? "오구리 캡" : "オグリキャップ"}
                </h3>
                <p className="text-gray-500">
                  {lang === "kr"
                    ? "우마무스메 프리티 더비 게임에 등장하는 오구리 캡 이라는 캐릭터입니다."
                    : "ウマ娘プリティーダービーゲームに登場するオグリキャップというキャラクターです。"}
                </p>
              </Link>
              <Link
                className="group"
                href="https://www.artstation.com/artwork/DvGylG"
                target="_blank"
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 2"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdna.artstation.com/p/assets/images/images/070/998/382/large/jatper-111-viewport.jpg?1704212701"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                  {lang === "kr" ? "유라" : "エウラ"}
                </h3>
                <p className="text-gray-500">
                  {lang === "kr"
                    ? "원신에 등장하는 유라 라는 캐릭터입니다."
                    : "原神に登場するエウラというキャラクターです。"}
                </p>
              </Link>
              <Link className="group" href="#">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 3"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdn.discordapp.com/attachments/910805322942255164/1253018889936310354/1.png?ex=66745447&is=667302c7&hm=e8572bfb4401b5f5341e409cf1d34ca92561cbf72c592d1c53ba6498e752446a&"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                  {lang === "kr" ? "토코야미 토와" : "常闇トワ"}
                </h3>
                <p className="text-gray-500">
                  {lang === "kr"
                    ? "홀로라이브 4기생 토코야미 토와입니다. 아직 제작중입니다."
                    : "ホロライブ4期生常闇トワです。まだ制作中です。"}
                </p>
              </Link>
            </div>
          </div>
        </section>
        <section
          className="bg-zinc-800 text-white py-20 px-6 md:px-10"
          id="about"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {lang === "kr" ? "디자이너 소개" : "デザイナー紹介"}
              </h2>
              <p className="text-lg md:text-xl">
                {lang === "kr"
                  ? "대한민국 국적에 02년생 남자 이며, 이름은 김동식입니다. 주로 3D 캐릭터 모델링과 3D 캐릭터 애니메이션을 작업합니다."
                  : "韓国の02年生まれの男性で、名前はキム・ドンシクです。主に3Dキャラクターモデリングと3Dキャラクターアニメーションを制作します。"}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Designer Portrait"
                className="object-cover"
                src="https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp"
              />
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10" id="Contact">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              {lang === "kr" ? "연락처" : "連絡先"}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">
                    {lang === "kr" ? "이름" : "名前"}
                  </Label>
                  <Input
                    id="name"
                    required
                    type="text"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    {lang === "kr" ? "메일" : "メール"}
                  </Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">
                  {lang === "kr" ? "메세지" : "メッセージ"}
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <Button
                className={`w-full bg-zinc-800 text-white cursor-not-allowed transition-opacity duration-300  ${
                  isHovered ? "opacity-50" : "opacity-100"
                }`}
                
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                type="submit"
                disabled
              >
                {lang === "kr" ? "제출" : "提出"}
                
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>© 3D Designer Portfolio by Dongsick Kim.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link className="hover:underline" href="#">
              {lang === "kr" ? "맨 위로 가기" : "トップへ戻る"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
