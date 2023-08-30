import webChatImgUrl from "../assets/imgs/webchat1.png";
import ucChatImgUrl from "../assets/imgs/uCChat.png";
import tagsPageImg from "../assets/imgs/tags-ui1.png";

export const workItemsJson = {
  work_items: [
    {
      name: "Web Chatbot",
      subname: "Embedded Virtual Assistant for Customers",
      intro:
        "The Web Chatbot project aimed to create an AI-powered virtual assistant for customers to handle routine inquiries via text-based conversations on websites, apps, SMS, or social channels.",
      objectives:
        "As the lead developer, my main goal was to turn a Figma design into a chat modal using HTML & CSS and lightweight vanilla JavaScript. The objective was to provide clients with a simple code snippet that could be embedded directly into their websites, without linking multiple JavaScript or CSS files. The chatbot needed to be responsive to various screen sizes and customizable, allowing clients to set colors, bot name, bot icon, timed messages, and on-open messages.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "FontAwesome",
        "Google WebFonts",
        "Moment.js",
        "Dropzone.js",
        "SocketCluster JavaScript Client",
        "Edify API’s",
        "Emoji Picker",
        "Figma",
      ],
      conclusion:
        "The Web Chatbot project successfully delivered a customizable and responsive virtual assistant. With a lightweight implementation and simple code snippet, clients can integrate the chatbot seamlessly into their websites, enhancing customer interactions and improving user experience.",
      img: webChatImgUrl,
    },
    {
      name: "Unified Communications Chat (UC Chat)",
      subname: "Powering Seamless Collaboration",
      intro:
        "UC Chat aimed to streamline collaboration for employees and contact center agents within the Edify App, similar to Slack's functionality.",
      objectives:
        "As lead JavaScript developer, my task was building the UI/UX of the chat component based on the Figma design. I enabled direct messaging, public & private channels, markdown formatting, gif sharing via Giphy API, and file uploads.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "FontAwesome",
        "Google WebFonts",
        "Moment.js",
        "Dropzone.js",
        "SocketCluster JavaScript Client",
        "Edify APIs",
        "Giphy API",
        "Emoji Picker",
        "BEM Methodology",
        "Bootstrap",
        "Responsive Design",
        "Figma",
      ],
      conclusion:
        "UC Chat delivered an efficient collaboration platform within Edify App. By skillfully converting the Figma design into a responsive UI, we created a seamless user experience, allowing employees and contact center agents to communicate effortlessly across devices.",
      img: ucChatImgUrl,
    },
    {
      name: "Console Settings - Tags Workspace",
      subname: "Simplifying Skill Assignment",
      intro:
        "The Tags workspace within Edify Console allows users to create and modify tags, which are essential for assigning skills to interactions and users. Tags help group and prioritize interactions, users, and content, enhancing overall organization and efficiency.",
      objectives:
        "My role in this project involved two key tasks. First, I built the Tags form component, which introduced a new reusable colorpicker element. This component was seamlessly integrated into our Storybook framework, providing comprehensive UI development, testing, and documentation capabilities. Second, I took full ownership of constructing the Tags detail view, allowing users to edit and save Tags effectively.",
      tech: [
        "React",
        "Formik",
        "React-JSS",
        "Semantic UI",
        "BlockPicker",
        "Reach Router",
        "Hooks",
        "TypeScript",
        "Edify APIs",
        "NPM",
        "ESLint",
      ],
      conclusion:
        "The Tags workspace project successfully delivered a user-friendly and efficient system for assigning skills within Edify Console. By employing cutting-edge technologies and design patterns, we created a streamlined and customizable Tags component, enabling users to organize and prioritize interactions and users effortlessly. The project's implementation ensures a seamless experience, enhancing the overall efficiency and productivity of Edify Console users.",
      img: tagsPageImg,
    },
  ],
};
