import { Tweet } from "@/components";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("Tweet", () => {
  it("renders a tweet", () => {
    render(
      <Tweet
        avatarUrl="https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x"
        profileName="Robot1"
        handle="robot1"
        content="This is a test tweet"
        comments={0}
        retweets={0}
        likes={0}
        views={0}
      />,
    );
  });

  it("renders the profile picture, the name, the handle and the tweet content", () => {
    render(
      <Tweet
        avatarUrl="https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x"
        profileName="Bot1"
        handle="bot1"
        content="This is a test tweet"
        comments={0}
        retweets={0}
        likes={0}
        views={0}
      />,
    );

    const avatarImage = screen.getByRole("img", {
      name: "Avatar",
    }) as HTMLImageElement;

    expect(avatarImage.src).toContain(
      encodeURIComponent(
        "https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x",
      ),
    );

    screen.getByText("Bot1");
    screen.getByText("@bot1");
    screen.getByText("This is a test tweet");
  });

  it("renders the number of comments, retweets, likes and views", () => {
    render(
      <Tweet
        avatarUrl="https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x"
        profileName="Bot1"
        handle="bot1"
        content="This is a test tweet"
        comments={1}
        retweets={2}
        likes={3}
        views={4}
      />,
    );

    screen.getByText("1");
    screen.getByText("2");
    screen.getByText("3");
    screen.getByText("4");
  });
});
