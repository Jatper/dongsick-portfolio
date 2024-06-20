import Image from "next/image";
import { Layout } from "@/components/component/layout";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="bg-zinc-900 text-white py-4 px-6 md:px-10 flex items-center justify-between sticky top-0 z-50">
        <Link className="text-2xl font-bold" href="#">
          3D Designer
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:underline" href="#home">
            Home
          </Link>
          <Link className="hover:underline" href="#Projects">
            Projects
          </Link>
          <Link className="hover:underline" href="#about">
            About
          </Link>
          <Link className="hover:underline" href="#Contact">
            Contact
          </Link>
        </nav>
        <Button className="md:hidden" variant="outline">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1" id="home">
        <section className="bg-zinc-800 text-white min-h-screen flex items-center justify-center py-20 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">3D 작업물 포트폴리오 by 김동식</h1>
              <p className="text-lg md:text-xl">지금까지 작업했던 3D 관련된 작업들입니다.</p>
              <div className="flex space-x-4">
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-black hover:bg-gray-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:bg-gray-50 dark:hover:bg-gray-50/80 dark:focus-visible:ring-gray-50"
                  href="https://www.artstation.com/jatper" target="_blank" 
                >
                  아트스테이션
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-100 px-6 py-3 text-gray-100 hover:bg-gray-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 dark:border-gray-100 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-50"
                  href="#작업물"
                >
                  작업물
                </Link>
              </div>
            </div>
            <div class="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <video className="h-full w-full" autoPlay loop muted playsInline>
                <source src="/jatper_html_main.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </section>
        <section className="py-20 px-6 md:px-10" id="Projects">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">작업물</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link className="group" href="https://www.artstation.com/artwork/Vy658X" target="_blank">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 1"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdna.artstation.com/p/assets/images/images/055/038/400/large/jatper-1.jpg?1704212870"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">오구리 캡</h3>
                <p className="text-gray-500">우마무스메 프리티 더비 게임에 등장하는 오구리 캡 이라는 캐릭터입니다.</p>
              </Link>
              <Link className="group" href="https://www.artstation.com/artwork/DvGylG" target="_blank">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 2"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdna.artstation.com/p/assets/images/images/070/998/382/large/jatper-111-viewport.jpg?1704212701"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">유라</h3>
                <p className="text-gray-500">원신에 등장하는 유라 라는 캐릭터입니다.</p>
              </Link>
              <Link className="group" href="#">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 3"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    src="https://cdn.discordapp.com/attachments/910805322942255164/1253018889936310354/1.png?ex=66745447&is=667302c7&hm=e8572bfb4401b5f5341e409cf1d34ca92561cbf72c592d1c53ba6498e752446a&"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">토코야미 토와</h3>
                <p className="text-gray-500">홀로라이브 4기생 토코야미 토와입니다. 아직 제작중입니다.</p>
              </Link>
              {/* <Link className="group" href="#">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 4"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    fill
                    src="/placeholder.svg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">Project 4</h3>
                <p className="text-gray-500">Description of Project 4</p>
              </Link>
              <Link className="group" href="#">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 5"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    fill
                    src="/placeholder.svg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">Project 5</h3>
                <p className="text-gray-500">Description of Project 5</p>
              </Link>
              <Link className="group" href="#">
                <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Project 6"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    fill
                    src="/placeholder.svg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">Project 6</h3>
                <p className="text-gray-500">Description of Project 6</p>
              </Link> */}
            </div>
          </div>
        </section>
        <section className="bg-zinc-800 text-white py-20 px-6 md:px-10" id="about">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">디자이너 소개</h2>
              <p className="text-lg md:text-xl">
                대한민국 국적에 02년생 남자 이며, 이름은 김동식입니다. 주로 3D 캐릭터 모델링과 3D 캐릭터 에니메이션을 작업합니다.
              </p>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-black hover:bg-gray-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 dark:bg-gray-50 dark:hover:bg-gray-50/80 dark:focus-visible:ring-gray-50"
                href="#"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img alt="Designer Portrait" className="object-cover" src="https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp" />
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10" id="Contact">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">컨텐츠</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>© 2024 3D Designer. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
}
