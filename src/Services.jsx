import React from "react";
import styled from "styled-components";
import TopHeader from "./home/TopHeader";
import Footer from "./contact/Footer";
import { useNavigate } from "react-router-dom";

function Services() {
  let navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <div className="cover-image">
          <TopHeader />
          <h1>Our Services</h1>
        </div>

        <div className="services">
          <div className="content">
            <div className="service-item">
              <h2>1. Market Expansion</h2>
              <p>
                &nbsp; &nbsp;We understand the challenges businesses face when
                it comes to expanding into new markets, which is why our market
                expansion services are designed to make the process as seamless
                as possible. Our team of experienced professionals will work
                closely with you to identify the most relevant markets for your
                business and develop a tailored strategy that aligns with your
                goals and resources. We offer a full range of services to
                support your expansion efforts, including market research,
                market analysis, and market entry strategy development. Our team
                will help you navigate regulatory and legal requirements,
                establish local partnerships, and identify potential customers
                and partners. With our help, you can shorten your time to market
                and find new streams of income. Whether you're launching a new
                product or service or prioritizing a market, we have the
                expertise and resources to help you expand successfully in
                Africa and beyond. Contact us today to learn more about our
                market expansion services and how we can help you achieve your
                business goals.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>2. Public Relations</h2>
              <p>
                &nbsp; &nbsp; DK Group offers public relations (PR) services to
                help businesses manage their reputation, build their brand
                image, and establish positive relationships with stakeholders.
                Their PR services include reputation management, media
                relations, crisis management, and content development. DK Group
                helps businesses develop effective communication strategies to
                address negative publicity and promote positive messages. They
                also help businesses build and maintain relationships with the
                media to secure positive media coverage and manage negative
                media attention. Additionally, they help businesses develop
                crisis management plans and communications strategies to manage
                crises effectively. DK Group also assists businesses in creating
                content that resonates with their target audience and supports
                their business objectives. Overall, DK Group's public relations
                services provide businesses with customized solutions that meet
                their unique needs and help them achieve their PR goals.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>3. Economic Intelligence</h2>
              <p>
                &nbsp; &nbsp; DK Group uses various research methods to provide
                businesses with insights into the current and future economic
                landscape. They analyze data on market conditions, competition,
                consumer trends, regulatory changes, policy developments, and
                legal trends to help businesses stay informed and make informed
                decisions. DK Group's economic intelligence services help
                businesses stay ahead of the competition, identify opportunities
                and threats, and develop effective strategies. Their expertise
                and experience in economic research, market research, regulatory
                analysis, and competitive analysis allow them to provide
                customized economic intelligence solutions to businesses.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>4. Sales Representation</h2>
              <p>
                &nbsp; &nbsp; DK Group provides product representation services
                to help businesses promote and sell their products to new
                markets and customers. Their services include market analysis,
                sales representation, channel development, and trade show
                representation. DK Group helps businesses identify opportunities
                and challenges in the target market, develop effective product
                representation strategies, and establish relationships with
                local partners who can effectively market and sell the
                business's products. They also provide access to local sales
                representatives who have a deep understanding of the local
                market and can effectively promote and sell the business's
                products. Additionally, DK Group helps businesses represent
                their products at trade shows and other industry events to
                establish new business relationships.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>5. Project Planning and Management</h2>
              <p>
                &nbsp; &nbsp; The team works closely with businesses to develop
                project plans that identify project goals, timelines, budgets,
                and resource requirements. They provide end-to-end project
                management services to ensure that projects are executed
                efficiently and effectively. The team also offers ongoing
                monitoring and control services to ensure that projects are on
                track and that any issues or risks are identified and addressed
                promptly. Lastly, they conduct post-project evaluations to
                assess project outcomes and identify areas for improvement.
                Overall, DK Group's project planning and management services
                help businesses reduce project risks, improve project outcomes,
                and maximize their return on investment. With their expertise
                and experience in project management, businesses can achieve
                their project goals efficiently and effectively.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>6. Liaison Services</h2>
              <p>
                &nbsp; &nbsp; DK Group provides liaison services to help
                businesses establish and maintain effective relationships with
                different stakeholders, including government agencies, industry
                associations, partners, and internal teams. Their liaison
                services include government liaison, industry liaison,
                partnership liaison, and internal liaison. DK Group helps
                businesses navigate the complex regulatory landscape and
                establish positive relationships with government agencies. They
                also help businesses establish and maintain effective
                relationships with industry associations or organizations, which
                can provide valuable insights and resources. Additionally, DK
                Group helps businesses identify potential partners, establish
                effective communication channels, and manage the partnership
                relationship. They also help businesses establish effective
                communication channels and processes to ensure that different
                teams are working together effectively.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>7. Business-to-Government</h2>
              <p>
                &nbsp; &nbsp; DK Group helps businesses identify and secure
                government contracts, access government funding programs, comply
                with regulatory requirements, and secure permits and licenses
                required for their operations. They also help businesses
                establish effective communication channels with government
                agencies, navigate the complex procurement process, and prepare
                grant applications. Additionally, they provide businesses with
                insights into regulatory changes and requirements and help them
                develop effective compliance strategies. Overall, DK Group's B2G
                services help businesses access government funding programs,
                comply with regulatory requirements, and establish positive
                relationships with government agencies. With their expertise and
                experience in government contracting, grants and funding,
                regulatory compliance, and permit and license acquisition, DK
                Group provides customized B2G solutions that meet the unique
                needs of each business.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
            <div className="service-item">
              <h2>8. Translation Services</h2>
              <p>
                &nbsp; &nbsp; DK Group helps businesses identify and secure
                government contracts, access government funding programs, comply
                with regulatory requirements, and secure permits and licenses
                required for their operations. They also help businesses
                establish effective communication channels with government
                agencies, navigate the complex procurement process, and prepare
                grant applications. Additionally, they provide businesses with
                insights into regulatory changes and requirements and help them
                develop effective compliance strategies. Overall, DK Group's B2G
                services help businesses access government funding programs,
                comply with regulatory requirements, and establish positive
                relationships with government agencies. With their expertise and
                experience in government contracting, grants and funding,
                regulatory compliance, and permit and license acquisition, DK
                Group provides customized B2G solutions that meet the unique
                needs of each business.
              </p>
              <button onClick={() => navigate("/contactus")}>Contact us</button>
            </div>
          </div>
        </div>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainContainer>
  );
}

export default Services;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  .cover-image {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 80vh;
    background: url("images/about images/image 8.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 100%;
    @media (min-width: 320px) and (max-width: 599px) {
      background: url("images/about images/about-mobile-cover.png");
    }
    padding-bottom: 2cm;
    h1 {
      position: absolute;
      left: 35%;
      top: 40%;
      color: #fff;
      font-family: Roboto Slab;
      font-size: 72px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media (min-width: 320px) and (max-width: 599px) {
        left: 20%;
        top: 50%;
        font-size: 48px;
      }
    }
  }
  .services {
    position: absolute;
    top: 60%;
    width: 80%;
    background-color: white;
    left: 8%;
    border-radius: 1cm;
    padding: 1.5cm 1cm;
    border-radius: 100px;
    background: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100%;
      left: 0;
      border-radius: 50px;
      top: 70%;
      padding: 1.5cm 0;
    }
    .content {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1cm;
      @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .service-item {
        border: 1px solid black;
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        background: #000225;
        color: white;
        h2 {
          font-family: Roboto Slab;
          font-size: 30px;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 22px;
          }
        }
        p {
          font-family: Roboto Slab;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 170%;
          text-align: justify;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 12px;
          }
        }
        button {
          display: flex;
          padding: 7.5px 30px;
          align-items: flex-start;
          gap: 10px;
          color: #000225;
          font-family: Roboto Slab;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          background-color: white;
          border-radius: 10px;
          cursor: pointer;
          border: 2px solid transparent;
          &:hover {
            font-weight: bold;
          }
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 13px;
          }
        }
      }
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  width: 100%;
  bottom: 0;
  margin-top: 185%;
  @media ((min-width: 320px) and (max-width: 599px)) and ((min-height: 640px) and (max-height: 750px)) {
    margin-top: 1000%;
  }
  @media ((min-height: 640px) and (max-height: 700px)) and ((min-width: 320px) and (max-width: 400px)) {
    margin-top: 1300%;
  }
  @media ((min-width: 320px) and (max-width: 599px)) and ((min-height: 750px) and (max-height: 850px)) {
    margin-top: 1250%;
  }
  @media ((min-width: 320px) and (max-width: 599px)) and ((min-height: 870px) and (max-height: 930px)) {
    margin-top: 1100%;
  }
`;
