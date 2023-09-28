import { Tweet } from "@/components";

export const metadata = {
  title: "Home / X",
};

export default function Home() {
  return (
    <main>
      <Tweet
        avatarUrl="https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x"
        profileName="Bot1"
        handle="bot1"
        content="This is a test tweet"
        comments={1}
        retweets={2}
        likes={3}
        views={4}
      />
      <Tweet
        avatarUrl="https://gravatar.com/avatar/252cb8ef15e0b121cbe9d54f051d3150?s=400&d=retro&r=x"
        profileName="Bot2"
        handle="bot2"
        content="This is a larger test tweet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsum fugit possimus minus labore dolore ratione temporibus illum nihil hic atque, sequi veniam quo id accusantium similique nam assumenda quod!"
        comments={1}
        retweets={2}
        likes={3}
        views={4}
      />
    </main>
  );
}
