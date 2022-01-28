import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../sections/eventsImages/basicprogramming.jpeg";
import BlogImage2 from "../sections/eventsImages/circuits.jpeg";
import BlogImage3 from "../sections/eventsImages/dsa.jpeg";
import BlogImage4 from "../sections/eventsImages/flutter.jpeg";
import BlogImage5 from "../sections/eventsImages/graphicdesign.png";
import BlogImage6 from "../sections/eventsImages/iot.jpeg";
import BlogImage7 from "../sections/eventsImages/ml.jpeg";
import BlogImage8 from "../sections/eventsImages/robotics.jpeg";
import BlogImage9 from "../sections/eventsImages/solidworks.png";
import BlogImage10 from "../sections/eventsImages/webd.jpeg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Events" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Top list of Mistakes to Avoid During MVP Development"
            subTitle="When there appears an idea to create a startup, have to take into
            account all the risks you will face and evalute them thoughtfullu.
            Also as a rule..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="A Day in the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage4}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage5}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage6}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage7}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage8}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage9}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage10}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
