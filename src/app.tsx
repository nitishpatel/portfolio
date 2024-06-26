import "./app.css";
import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import { motion } from "framer-motion";

import { projects } from "./data/projects";
import { blogs } from "./data/blogs";

export function App() {
  return (
    <div>
      <div className="container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-10 md:sticky md:top-0 md:self-start md:col-span-1">
            <Hero />
          </div>
          <div class="scrollable-cards md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-3xl font-bold">Projects</h3>
              {projects.map((project) => {
                return (
                  <div className="col-span-1">
                    <ItemCard
                      title={project.name}
                      description={project.description}
                      image={project.image}
                      url={project.url}
                      tags={project.tags}
                    />
                  </div>
                );
              })}
            </motion.div>
            <div className="col-span-1">
              <h3 className="text-3xl font-bold">Blogs</h3>
              {blogs.map((blog) => {
                return <ItemCard title={blog.title} url={blog.url} />;
              })}
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="text-center text-gray-500">Made with 🧡</p>
        </div>
        <script
          src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
          user-profile="https://topmate.io/embed/profile/ntshptl?theme=D5534D"
          btn-style='{"backgroundColor":"#ed6337","color":"#fff"}'
          embed-version="v1"
          button-text="Let's Connect"
          position-bottom="30px"
          custom-padding="0px"
          custom-font-size="16px"
          custom-font-weight="500"
          custom-width="200px"
        ></script>
      </div>
    </div>
  );
}
