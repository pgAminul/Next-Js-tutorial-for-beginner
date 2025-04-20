import Image from "next/image";
import ButtonForHome from "./Client/ButtonForHome";
import aminul from "../../../public/aminul.png";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In today's
        fast-paced world, communication and technology have become the backbone
        of modern society. People rely heavily on digital tools to connect,
        work, and learn. With each passing day, innovation continues to shape
        the way we live, and adaptation is key to success. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        From remote learning to virtual workspaces, the digital age has unlocked
        a range of possibilities. Companies are now shifting towards flexible
        environments, allowing teams to collaborate from different corners of
        the world. Efficiency and creativity thrive in such settings. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; technology is not the only driver of progress. Human connection,
        empathy, and purpose play vital roles in shaping a balanced life. People
        are beginning to value well-being and mindfulness more than ever before.
        Suspendisse potenti. Personal development has become a central theme in
        many people's lives. Whether it’s learning a new skill, starting a
        business, or simply focusing on health, individuals are finding
        motivation to grow and evolve. Life is a journey of constant change, and
        growth often comes through challenges. Cras tristique, nisl sit amet
        lobortis bibendum, elit nisl varius justo, in fermentum nisl ligula in
        nulla. The importance of storytelling and authentic communication cannot
        be overstated. Brands, educators, and leaders are learning to connect
        through meaningful messages that inspire trust and loyalty. Donec vitae
        diam at odio blandit feugiat. Simplicity and clarity in design have also
        become vital. Websites, apps, and platforms are being built to offer a
        seamless experience that is both beautiful and functional. User-centered
        design helps people feel empowered and understood. Integer ac sem
        euismod, consequat purus eget, facilisis nisl. As social awareness
        grows, people are paying more attention to sustainability, ethics, and
        responsibility. From eco-friendly packaging to supporting local
        businesses, every small action contributes to a larger positive impact.
        Morbi ac erat nec nibh tristique luctus. Education is no longer confined
        to classrooms. Online courses, YouTube tutorials, and mentorship
        communities have made learning more accessible than ever. Anyone with
        curiosity and a connection to the internet can start a journey of
        discovery today. Sed sit amet lacus id mauris fermentum eleifend. The
        world is a mix of complexity and opportunity. Challenges often come
        disguised as lessons, and failure is not the end—it's a stepping stone
        to something greater. Resilience is the ability to rise, try again, and
        never give up. Nam eget sapien at sapien posuere facilisis. Balance
        between digital life and real-world connection is crucial. Spending time
        offline, nurturing relationships, and enjoying nature help keep life
        grounded and meaningful. In conclusion, whether we are designing a
        product, writing content, or building a life, intention matters.
        Progress begins with small steps. Consistency, courage, and compassion
        can take us farther than we imagine. Let’s create, connect, and keep
        learning—one day at a time.
      </h2>
      <ButtonForHome />

      <div className="mb-5">
        <Link
          href={"/users"}
          className="text-white bg-black p-4 m-8 rounded-4xl"
        >
          {" "}
          See All Users
        </Link>
      </div>

      <Image src={aminul} placeholder="blur" />
    </div>
  );
}
