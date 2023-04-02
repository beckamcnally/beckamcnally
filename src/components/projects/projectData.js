import FiveDayImg from '../../assets/FivedayForecast.png'
import eCommerce from '../../assets/eCommerce.png'
import expenseTracker from '../../assets/expenseTracker.PNG'
import jate from '../../assets/Jate.png'
import workday from '../../assets/WorkDay.PNG'
import NibbleNabble from '../../assets/homepageimage.png'
console.log(FiveDayImg)


const projectData = [
  {
      "deployedSite": "https://sheltered-springs-82975.herokuapp.com/",
      "title": "goOffice",
      "githubRepo": "https://github.com/beckamcnally/goOffice",
      "image": jate,
      "description": "The goOffice project is a single-page offline code editor that allows users to write and save JavaScript code offline. The app is installable, and the code is automatically saved when the user clicks away from the editor. The project was built using webpack and service workers and meets all the criteria for a Progressive Web Application (PWA), making it a great addition to a developer's portfolio."
    },
  {
    "deployedSite": "https://secure-anchorage-04407.herokuapp.com/",
    "githubRepo":"https://github.com/srinithi19/Expense-Tracker",
    "image": expenseTracker,
    "title": "Expense Tracker",
    "description": "Expense Tracker is a gamified finance application that offers a fun and interactive way to manage your finances. With its intuitive interface, you can quickly and easily track your income and expenses, set budgets, and view your transaction history. Scrooge is built using HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars, and Bulma. It also utilizes Chart.js for rendering income and expense amounts."
  },
  {
    "deployedSite": "",
    "title": "Nibble Nable",
    "githubRepo": "https://github.com/megellman/group-project",
    "image": NibbleNabble,
    "description": "Nibble Nabble is a web application that helps hosts plan multiple dinner party menus with cocktails and paired wines. It utilizes technologies such as HTML, CSS, JavaScript, JQuery, Tailwind, and multiple food and drink APIs. The user interface is designed to allow easy navigation and searching, with dynamically generated search forms. The project was developed using Agile methodology, with contributions from multiple developers."
  },
  {
    "deployedSite": "",        "githubRepo": "",
    "title": "eCommerceBackend",
    "image": eCommerce,
    "description": "The eCommerceBackend project is an Object-Relational Mapping (ORM) challenge for building the back-end of an e-commerce website using Express.js API and Sequelize to interact with a MySQL database. The application allows tracking of products in a store and organizing them into categories, with features for adding, removing, or updating products and categories. The project includes a walkthrough video demonstrating its functionality and meets specific acceptance criteria, such as displaying data in formatted JSON and successful creation, updating, and deletion of data in the database."
  },
  {
    "deployedSite": "",
    "title": "FiveDayForecast",
    "githubRepo": "https://github.com/beckamcnally/FiveDayForecast",
    "image":FiveDayImg,
    "description": "The FiveDayForecast project is a weather dashboard that allows travelers to plan trips accordingly by retrieving weather data for multiple cities. This browser-based application features dynamically updated HTML and CSS, a search function, a five-day forecast, and uses localStorage to store persistent data. The project uses the OpenWeather API to retrieve weather data and includes a clean and polished user interface that resembles the mock-up functionality provided in the Challenge instructions."
  },
  {
    "deployedSite": "",
    "title": "Daily Scheduler",
    "githubRepo": "",
    "image": workday,
    "description": "The Daily Scheduler project is a simple calendar application that allows users to save events for each hour of the day. The app features dynamically updated HTML and CSS powered by jQuery, with time blocks color-coded to indicate whether they are in the past, present, or future, and the ability to enter and save events that persist even after refreshing the page. The project was completed using a variety of technologies, including HTML, CSS, JavaScript, Day.js, jQuery, and Bootstrap."
  }
]
export default projectData