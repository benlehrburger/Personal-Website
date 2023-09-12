import gen1 from '../images/generative/Bad-Ex-min.png';
import gen2 from '../images/generative/Beach1-min.png';
import gen3 from '../images/generative/Beach2-min.png';
import gen4 from '../images/generative/Epoch50-1-min.png';
import gen5 from '../images/generative/Epoch50-2 copy-min.png';
import gen6 from '../images/generative/Good-Ex-min.png';
import gen7 from '../images/generative/Input-min (1).jpg';
import gen8 from '../images/generative/Input-min (2).jpg';
import gen9 from '../images/generative/Input-min.jpg';
import gen10 from '../images/generative/nala1-min.jpeg';
import gen11 from '../images/generative/nala2-min.jpeg';
import gen12 from '../images/generative/original-min.png';
import gen13 from '../images/generative/Out1-min (1).png';
import gen14 from '../images/generative/Out1-min.png';
import gen15 from '../images/generative/Out5-min.png';
import gen16 from '../images/generative/Epoch100.png';

const generative_project = {
  title: 'Independent Study on Generative AI',
  description: 'I trained a series of generative AI image and language models to empower creatives with new tools.',

  sections: [
    {
      subheading: 'Abstract',
      paragraph: [
        {
          type: 'text',
          content:  'I\'ll cut to the chase. Generative AI is cool, but no, it\'s not going to destroy humanity.',
        },
        {
          type: 'text',
          content: 'For my independent study in Cognitive Science @ Dartmouth College, I sought to explore the frontier of generative AI. Through my research, I have learned that Generative AI is a powerful application of brain-based software that affords incredible opportunities for creating tools that improve the human experience. Whether it\'s neurons or nodes, the emergent properties resulting from millions of finetuned dials never ceases to amaze me.',
        },
        {
          type: 'text',
          content: 'My best findings comprise the following tools. I cast a wide net into the pool of generative AI and only pursued what I perceived to be the most promising routes. Generative image and language tools have seen remarkable growth over the past couple years and are now open-source, generalizable, and customizable. Check out what I was able to create below.',
        },
      ],
      image: [],
    },
    {
      subheading: 'Text-Guided Image-to-Image Generation for Modern Architecture Design',
      paragraph: [],
      image: [
        {
          type: 'double',
          caption: 'Prompt = \"modern house with a spacious home office, featuring large windows, a sleek desk setup, and plenty of natural light to inspire productivity\"',
        },
        {
          src: gen7,
          caption: 'Prompt = \"modern house with a spacious home office, featuring large windows, a sleek desk setup, and plenty of natural light to inspire productivity\"',
        },
        {
          src: gen15,
          caption: 'Prompt = \"modern house with a spacious home office, featuring large windows, a sleek desk setup, and plenty of natural light to inspire productivity\"',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content: 'This text-guided image-to-image model takes as input a prompt and an image and returns an ammended version of the image based on the prompt. The model is built on top of Stable Diffusion 2-1 and finetuned for 75 epochs on a custom web-scraped modern architecture dataset. My vision for this model was to serve as the foundations of a tool to assist architects and designers in thinking outside of any box they may be confined to.',
        },
      ],
      image: [
        {
          type: 'double',
          caption: 'Prompt = \"office building designed for sustainability, incorporating features like solar panels, rainwater harvesting systems, and efficient insulation to minimize environmental impact\"',
        },
        {
          src: gen8,
          caption: 'Prompt = \"office building designed for sustainability, incorporating features like solar panels, rainwater harvesting systems, and efficient insulation to minimize environmental impact\"',
        },
        {
          src: gen13,
          caption: 'Prompt = \"office building designed for sustainability, incorporating features like solar panels, rainwater harvesting systems, and efficient insulation to minimize environmental impact\"',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content: 'To be a fully deployable tool, the model should be further finetuned on organic architecture (think Zaha Hadid). Right now it produces a lot of "classically" modern results that are not as outlandish as the Parametricism Era of architecture – based on CAD modeling and algorithmic design – permits. It also suffers from the classic image generation pitfall of warping and bending reality when you take a closer look. However, it is an interesting first step towards new architectural possibilities.',
        },
      ],
      image: [
        {
          type: 'double',
          caption: 'Prompt = \"modern church that pays homage to its religious symbolism through carefully crafted contemporary stained glass windows, capturing the play of light and color\"',
        },
        {
          src: gen9,
          caption: 'Prompt = \"modern church that pays homage to its religious symbolism through carefully crafted contemporary stained glass windows, capturing the play of light and color\"',
        },
        {
          src: gen14,
          caption: 'Prompt = \"modern church that pays homage to its religious symbolism through carefully crafted contemporary stained glass windows, capturing the play of light and color\"',
        },
      ],
    },
    {
      subheading: 'Masked Language Models for Personalized Autocompletion',
      paragraph: [
        {
          type: 'text',
          content: 'I trained a masked language model to autocomplete my next word based on my undergraduate writings. The vision is something like a personalized Grammarly but with control over your data. I compiled a training corpus of over 3000 lines of writing samples from essays I had written during my time in college, which I used to finetune DistilBERT for 50 epochs. The "masked" in masked language model represents the word to be predicted, like so:',
        },
        {
          type: 'code',
          content: 'Cognitive [MASK] >>> cognitive neuroscience',
        },
        {
          type: 'text',
          content: 'The model does well at predicting words in a coherent way:',
        },
        {
          type: 'code',
          content: 'I\'m looking for [MASK] >>> i\'m looking for answers',
        },
        {
          type: 'code',
          content: 'I believe in [MASK] >>> i believe in truth',
        },
        {
          type: 'text',
          content: 'But it doesn\'t exactly understand who I am:',
        },
        {
          type: 'code',
          content: 'I go to school in [MASK] >>> i go to school in bangkok',
        },
        {
          type: 'code',
          content: 'Ben [MASK] >>> ben!',
        },
        {
          type: 'text',
          content: 'I think if I were to give the tool more of a capacity for \"long-term memory\" moving forwards and consistently train it, it would really start to become a helpful, personalized writing aide. But right now i\'s just kind of weirdly pessimistic:',
        },
        {
          type: 'code',
          content: 'One day we will [MASK] >>> one day we will die',
        },
      ],
      image: [],
    },
    {
      subheading: 'Training',
      paragraph: [
        {
          type: 'text',
          content:  'I ran most of my computations on Dartmouth\'s Discovery Cluster GPUs, in conjunction with Dartmouth Research Computing. The remote cluster drastically sped up training and feed-forward runs, by about 10^2 the speed my CPU was running at. Special thank you to Kunal Jha, a D\'24 ML wizard, who helped me get set up with the cluster. I intend to add my documentation notes to this repository in coming weeks (which I found to be very helpful). Dartmouth alum Jin Hyun Cheong also wrote a detailed documentation that I would recommend.',
        },
      ],
      image: [],
    },
    {
      subheading: 'Intermediary Models',
      paragraph: [
        {
          type: 'subhead',
          content:  'Dreambooth Unconditional Diffusion',
        },
      ],
      image: [
        {
          type: 'double',
          caption: 'Prompt = \"Nala the bunny on the beach\"',
        },
        {
          src: gen3,
          caption: 'Prompt = \"Nala the bunny on the beach\"',
        },
        {
          src: gen2,
          caption: 'Prompt = \"Nala the bunny on the beach\"',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content:  'This model was made using Dreambooth, which is a technique to teach new concepts to Stable Diffusion with very little training data. My dataset for this model consists of just 17 images of my pet bunny, Nala. While she may seem slightly demented is those generated images above, it\'s actually not that far off from what she actually looks like:',
        }
      ],
      image: [
        {
          type: 'double',
          caption: 'Nala the bunny IRL',
        },
        {
          src: gen10,
          caption: 'Nala the bunny IRL',
        },
        {
          src: gen11,
          caption: 'Nala the bunny IRL',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content:  'This technique was fun because it\'s a lot of bang for your buck. Five minutes to create a dataset, 2 minutes on a GPU, and it\'s ready to go. That said, it certainly didn\'t work all of the time. Just look at the difference in these two samples generated from the same batch:',
        }
      ],
      image: [
        {
          type: 'double',
          caption: 'Prompt = \"Nala the bunny at the Acropolis\"',
        },
        {
          src: gen6,
          caption: 'Prompt = \"Nala the bunny at the Acropolis\"',
        },
        {
          src: gen1,
          caption: 'Prompt = \"Nala the bunny at the Acropolis\"',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'subhead',
          content:  'Stable Diffusion Unconditional Church Generation',
        },
        {
          type: 'text',
          content:  'On my way toward a text-guided image-to-image model, I first tried unconditional architecture generation. I began with the LSUN Church Generative Model as a starting point, which generates low-res images of churches. I didn\'t want my model to have to learn image construction from scratch and this model appeared a good canvas to build on top of. I then finetuned the church-generating model on my modern architecture dataset for varying amounts of depth, and found that the model reached a peak loss around 50 epochs of finetuning.',
        }
      ],
      image: [
        {
          type: 'double',
          caption: 'Original LSUN Church Image vs. Modern Finetuned Generated Image',
        },
        {
          src: gen12,
          caption: 'Original LSUN Church Image vs. Modern Finetuned Generated Image',
        },
        {
          src: gen4,
          caption: 'Original LSUN Church Image vs. Modern Finetuned Generated Image',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content:  'This model was not nearly as powerful as the others, as you can tell by the low resolution and fuzzy edges. Sometimes when you work on this stuff for too long at a time you start to envision outputs that aren\'t really there. For instance, the following images were some of the model\'s better outputs, but it\'s clear that there is just not enough potency in my dataset to bridge the gap from churches to modern architecture.',
        }
      ],
      image: [
        {
          type: 'double',
          caption: 'Modern Finetuned Generated Image Samples',
        },
        {
          src: gen5,
          caption: 'Modern Finetuned Generated Image Samples',
        },
        {
          src: gen16,
          caption: 'Modern Finetuned Generated Image Samples',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'subhead',
          content:  'Naive Chatbot Trained on Text Message Data',
        },
        {
          type: 'text',
          content:  'This naive chatbot was a stepping stone on my way to some sort of a custom large language model, which ended up becoming the aforementioned autocompletion tool. For a dataset, I downloaded my entire iPhone text history (which I did not publish online for obvious reasons) and isolated only messages I had sent. I then trained a chatbot from Python\'s Chatterbot library, but the chatbot was far too sensitive to my training data, which was also garbage. It turns out I am a gramatically terrible texter. Here are some of the dialogues between the chatbot and I:',
        },
        {
          type: 'code',
          content:  'Me: Hello',
        },
        {
          type: 'code',
          content:  'Text-me: hello Joey',
        },
        {
          type: 'text',
          content:  'Joe (Joey) is a good friend.',
        },
        {
          type: 'code',
          content:  'Me: How are you?',
        },
        {
          type: 'code',
          content:  'Text-me: tired',
        },
        {
          type: 'text',
          content:  'Sounds like me.',
        },
        {
          type: 'code',
          content:  'Me: What are you doing tonight?',
        },
        {
          type: 'code',
          content:  'Text-me: where did you find it',
        },
        {
          type: 'text',
          content:  'Man, Text-me really knows how to kill a good conversation. Notice how it\'s just drawing directly from examples it saw during the traning phase. There\'s no synthesizing of training samples to cater towards never-before-seen contexts. This is why I eventually decided to build my language model on top of DistilBERT, a much more powerful text synthesis engine.',
        },
      ],
      image: [],
    }
  ],
  relatedPages: [
    {
      title: 'View Code on GitHub',
      link: 'https://github.com/benlehrburger/Independent-Study/tree/main',
    },
    {
      title: 'See Hugging Face Datasets',
      link: 'https://huggingface.co/?recent=update-dataset',
    },
  ],
};

export default generative_project;