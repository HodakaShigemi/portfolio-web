"use client";

import Section from "./section";
import MDXContent from "@/articles/profile.mdx";

const Profile = () => {
  return (
    <Section id="profile">
      <p className="text-3xl mb-3">はじめまして、</p>
      <MDXContent />
    </Section>
  );
};

export default Profile;
