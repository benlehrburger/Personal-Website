import agora1 from '../images/agora/wb1.png';
import agora2 from '../images/agora/wb2.png';
import agora3 from '../images/agora/wb3.png';
import agora4 from '../images/agora/wb4.png';
import agora5 from '../images/agora/wb5.png';

const agora_project = {
  title: 'Agora Website Prototype',
  description: 'In preparation for applying to YCombinator, I built a clean website frontend that simplifies financial analyses and crowdsourcing.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'During the COVID-19 pandemic, my friend and I watched some of our favorite small businesses go under. Mom-and-Pop shops were short on cash and traditional bank loans carried too much liability. So, we created a platform to offer interest-free microloans to businesses that are financed by a pool of local community members who get discounts on future purchases in return. It\'s essentially GoFundMe meets Groupon. Before applying to startup incubators with our concept, we needed a tangible platform. I assumed the responsibility of building an attractive website to handle transactions, all within two weeks.',
        },
      ],
      image: [
        {
          src: agora1,
          caption: 'Landing page of Agora website',
        },
      ],
    },
    {
      subheading: 'The Design',
      paragraph: [
        {
          type: 'text',
          content: 'Our business model hinged on peoples\' willingness to give money to their favorite small businesses in exchange for exclusive benefits. So, our platform needed to highlight the small businesses themselves. I designed it to be an interpersonal experience by including features like pictures of business owners and first-person quotes. The more that users resonated with the people behind the business, the more likely they would be to give. We also needed a transparent way of showing the financial health (or illness) of a small business. People shouldn\'t have to be financially literate to know if a business is doing well or not, so we needed some sort of visual cue to make this process transparent. I developed a risk-assessment scale that shows, using space and color, the financial status of a company. Lastly, I designed a UI for handling transactions; the UI shapes user behavior by only offering a limited set of donation options, further alleviating the need for a complex financial assessment.',
        },
      ],
      image: [
        {
          src: agora2,
          caption: 'Media cards signifying small businesses seeking microloans',
        },
        {
          src: agora3,
          caption: 'Homepage of an example small business',
        },
      ],
    },
    {
      subheading: 'The Build',
      paragraph: [
        {
          type: 'text',
          content: 'I used React and JavaScript to build the platform\'s framework and functionality. I complemented those tools with components from material.io (which is my standard go-to). During the build phase, I decided to make the UI have more of an informal social media feel, which I accomplished using media cards. Since the model was not going to be deployed in the near future and I was on a tight timeline, I decided not to make a full backend, and instead focused my efforts on the UI.',
        },
      ],
      image: [
        {
          src: agora4,
          caption: 'Transparent financial analysis',
        },
        {
          src: agora5,
          caption: 'Loan status and transaction handling',
        },
      ],
    },
    {
      subheading: 'The Results',
      paragraph: [
        {
          type: 'text',
          content: 'A full demo and snippets of the website can be accessed below. You can also view the code behind the website here on my GitHub. We applied to YCombinator in winter 2020 and made it further than 90% of other applicants before being dropped from the incubator. Still, we were proud of the business we put together and I was particularly proud of the UI I programmed. We decided that college was more important than a flimsy business model, but are ready to deploy Agora if it is ever again needed.',
        },
      ],
      image: [],
    },
  ],
  galleryImages: [
    '400px',
    {
      src: agora1,
      caption: 'Landing page',
      type: 'image',
    },
    {
      src: agora2,
      caption: 'Landing page, small business listings',
      type: 'image',
    },
    {
      src: agora3,
      caption: 'Example small business listing',
      type: 'image',
    },
    {
      src: agora4,
      caption: 'Small business financial analysis',
      type: 'image',
    },
    {
      src: agora5,
      caption: 'Transaction user interface',
      type: 'image',
    },
  ],
};

export default agora_project;