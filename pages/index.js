import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
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
              Deep Learning Researcher & Machine Learning Enthusiast
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Passionate about advancing the field of AI and exploring new
              technologies. Join me in my journey of innovation and discovery!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/your-twitter" aria-label="Twitter">
                <AiFillTwitterCircle />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" aria-label="LinkedIn">
                <AiFillLinkedin />
              </a>
              <a href="https://youtube.com/your-youtube" aria-label="YouTube">
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="SriHarsha Bodicherla" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              With a solid background in deep learning and AI, I offer a range of
              services including machine learning model development, data analysis,
              and research consultation.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I specialize in creating innovative solutions and advancing the field
              of artificial intelligence through research and practical applications.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="AI Design" />
              <h3 className="text-lg font-medium pt-8 pb-2">AI Solutions</h3>
              <p className="py-2">
                Providing cutting-edge AI solutions tailored to your needs and goals.
              </p>
              <h4 className="py-4 text-teal-600">Tools and Technologies</h4>
              <p className="text-gray-800 py-1">TensorFlow</p>
              <p className="text-gray-800 py-1">PyTorch</p>
              <p className="text-gray-800 py-1">Keras</p>
              <p className="text-gray-800 py-1">Scikit-Learn</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Machine Learning Code" />
              <h3 className="text-lg font-medium pt-8 pb-2">Model Development</h3>
              <p className="py-2">
                From concept to deployment, I build and optimize machine learning models.
              </p>
              <h4 className="py-4 text-teal-600">Programming Languages</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">R</p>
              <p className="text-gray-800 py-1">Julia</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="Consulting" />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Offering expert advice and strategies for your AI and machine learning projects.
              </p>
              <h4 className="py-4 text-teal-600">Consulting Areas</h4>
              <p className="text-gray-800 py-1">Research Guidance</p>
              <p className="text-gray-800 py-1">Project Management</p>
              <p className="text-gray-800 py-1">Technical Review</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Explore some of my notable projects and contributions to the field of AI.
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
                alt="Project 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="Project 2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="Project 3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="Project 4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="Project 5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="Project 6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
