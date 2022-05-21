import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはDiddyworksのメンバーが書いたブログを集約するためのサイトです。
            </p>
            <p>
              絶賛、エンジニア採用中なので、少しでも気になった方がいたら
              <a href="https://diddyworks.co.jp/recruit">
                こちら
              </a>
              から！
            </p>
            <p>
              
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
