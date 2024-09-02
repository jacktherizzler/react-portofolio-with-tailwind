import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import profilePic from "../public/profile-pic.png"; 
import code from "../public/code.png";
import design from "../public/design.png";
import research from "../public/research.png";
import consulting from "../public/consulting.png";
import web1 from "../public/project1.png"; 
import web2 from "../public/project2.png";
import web3 from "../public/project3.png";
import web4 from "../public/project4.png";
import web5 from "../public/project5.png";
import web6 from "../public/project6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SriHarsha Bodicherla - Portfolio</title>
        <meta name="description" content="Portfolio of SriHarsha Bodicherla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">SriHarsha Bodicherla</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf" // Ensure you have your resume uploaded to this path
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              SriHarsha Bodicherla
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Deep Learning Researcher and Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Enthusiastic about Deep Learning, Satellite Imagery, AI, and
              Spectroscopy Data. Working on cutting-edge projects involving
              GANs, diffusion models, atmospheric correction, and more. Let's
              connect and collaborate on innovative projects!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profilePic} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have a strong background in Deep Learning, AI, and Software
              Development, working on a range of projects from atmospheric
              correction to image inpainting. My expertise spans across various
              domains, enabling me to offer a wide array of services.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Whether it's developing advanced machine learning models, building
              software applications, or conducting in-depth research, I am here
              to help you achieve your goals.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                AI and Deep Learning Solutions
              </h3>
              <p className="py-2">
                Designing and implementing AI-driven solutions tailored to your
                specific needs, including image inpainting, atmospheric
                correction, and more.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">TensorFlow</p>
              <p className="text-gray-800 py-1">PyTorch</p>
              <p className="text-gray-800 py-1">Keras</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Software Development
              </h3>
              <p className="py-2">
                Building robust and scalable software solutions, including web
                applications, automation tools, and more.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">GitHub</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={research} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Research</h3>
              <p className="py-2">
                Conducting research in deep learning, generative models,
                atmospheric correction, and more, with a focus on publishing
                findings and advancing the field.
              </p>
              <h4 className="py-4 text-teal-600">Research Areas</h4>
              <p className="text-gray-800 py-1">GANs</p>
              <p className="text-gray-800 py-1">Diffusion Models</p>
              <p className="text-gray-800 py-1">Remote Sensing</p>
              <p className="text-gray-800 py-1">Spectroscopy Data</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the projects I've worked on, showcasing my
              expertise in AI, software development, and research. Each project
              highlights my ability to solve complex problems and deliver
              innovative solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 1</h4>
              <p className="text-gray-800 py-1">Description of Project 1.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 2</h4>
              <p className="text-gray-800 py-1">Description of Project 2.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 3</h4>
              <p className="text-gray-800 py-1">Description of Project 3.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 4</h4>
              <p className="text-gray-800 py-1">Description of Project 4.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 5</h4>
              <p className="text-gray-800 py-1">Description of Project 5.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
              <h4 className="text-lg font-medium pt-8 pb-2">Project 6</h4>
              <p className="text-gray-800 py-1">Description of Project 6.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
