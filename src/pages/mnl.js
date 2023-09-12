import m1 from '../images/mnl/img1.png';
import m2 from '../images/mnl/img2.png';
import g1 from '../images/mnl/g1.png';
import g2 from '../images/mnl/g2.png';
import g3 from '../images/mnl/g3.png';
import g4 from '../images/mnl/g4.png';
import g5 from '../images/mnl/g5.png';
import g6 from '../images/mnl/g6.png';
import g7 from '../images/mnl/g7.png';
import g8 from '../images/mnl/g8.png';

const mnl_project = {
  title: 'Predicting Generosity',
  description: 'I programmed a deep learning neural network to predict alumni donations to colleges and universities.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'Early in 2021, nonprofit consulting firm Marts & Lundy asked me to help them answer a simple question: how can we predict major donors in higher education? Their clients – colleges and universities – wanted to know which alumni they should target with fundraising campaign resources. As the only intern at the company, I was responsible for running the entire project myself. Over the next nine months, I developed a neural network classifier trained on more than 1.5 million datapoints with over 140,000 network parameters. In the end, the classifier predicts alumni donations with 76% accuracy overall and predicts 95% of alumni donations within $250.',
        },
      ],
      image: [
        {
          src: m1,
          caption: 'Major project stakeholders',
        },
      ],
    },
    {
      subheading: 'Data Acquisition',
      paragraph: [
        {
          type: 'text',
          content: 'The first step in my creative process was to find accurate data from which I could pull insights. Marts & Lundy was unable to provide me with industry data because their client\’s alumni data – from Dartmouth College to the University of Texas to the University of Buffalo – was sensitive and protected. So, the onus was on me to secure reliable training data. I found a Dartmouth alumni through the Dartmouth Career Network who owns a data-holding company, Advizor. He was kind enough to lend me a dataset detailing philanthropy in higher education. The dataset is composed of 65,000+ donors (and non-donors) with 23 data points per entity, summing to 1.5M+ data points in total.',
        },
        {
          type: 'o-list',
          content: ['Number of gifts in the last 5 years', 'Number of gifts in the last 6-10 years', 'Dollar amount of gifts in the last 10 years', 'Lifetime hard commitment', 'Lifetime soft commitment', 'Total lifetime commitment', 'School committees served on in the last 10 years', 'Number of school reunions attended since graduating', 'Number of sports played in school', 'Number of student activities participated in school', 'Whether or not the candidate graduated with a degree', 'Age', 'Year of graduation', 'Whether or not the candidate holds a c-level job', 'Whether or not the candidate is a school alumni', 'Whether or not the candidate has a school reunion in the next 5 years', 'RFM score', 'Number of honors graduated with', 'Lifetime hard credit', 'Lifetime soft credit', 'Total lifetime credit', 'Name', 'Total commitment bin']
        },
      ],
      image: [],
    },
    {
      subheading: 'Methodology',
      paragraph: [
        {
          type: 'text',
          content: 'I elected to use a supervised neural network because forecasting major donors required making predictions (as opposed to identifying patterns, in which case I would have built an unsupervised network instead). Doing so meant that I needed to extract some sort of labeled output from the dataset. One of the categories – “total commitment bin” – emerged as a likely candidate. This data point detailed a donor’s total commitments over the last five years, separated into 12 donation brackets ranging from $0 to $25K+.',
        },
        {
          type: 'text',
          content: 'I scrubbed the dataset of unnecessary information like donors’ names, ID numbers, etc. and encoded qualitative data points, such as replacing “yes” and “no” with 1 and 0. To train the network without bias, I set a base rate for the number of data points in each category. There were significantly fewer $25K+ data points than any other class, but it was the major donations that I was particularly interested in. So, I whittled the dataset down such that each class had only as many data points as the $25K+ class; specifically, I pulled 272 random samples from each class for a total of 3264 donors.'
        },
        {
          type: 'text',
          content: 'I separated the data into training and testing sets. Although it is common practice to use 80% of the data for training and 20% for testing, I decided to split the data 90-10. Network accuracy was more important to me than validation, and because the dataset had already been distilled so much, I wasn’t willing to sacrifice any more data points. So I took 30 samples from each class and designated them as the testing dataset. Lastly, I normalized the data to reduce inconsistencies and redundancy.'
        },
        {
          type: 'text',
          content: 'With my data properly organized, I began programming the neural network itself. I used PyTorch’s artificial neural network package to implicitly handle most of the computation. I employed an extended perceptron to train the network’s weights using backpropagation. For my nonlinear activation function, I used ReLU – a piecewise linear function that outputs the input directly if positive, otherwise it outputs 0. The ReLU activation function is standard across most classifiers and worked significantly better than any of the other nonlinear activation functions I experimented with.'
        },
        {
          type: 'text',
          content: 'I also decided to implement a custom nonlinear activation function of my own. Although the classifier was programmed to output one of 12 classes, some of those classes were not meaningfully distinctive. What was the point in classifying $1-$24 versus $25-$49? It was likely that there would not be any discernible patterns in the data that would distinguish donors in either category. So, I grouped like classes together according to the classifier’s original output. Instead of 12 classes, the classifier outputted into one of five classes: $0, $1-$999, $1K-$4.9K, $5K-$24.9K, $25K+. This drastically improved the network\’s performance.'
        },
        {
          type: 'text',
          content: 'There were still a number of network parameters to define. Namely, I had to decide on the number of training epochs, the learning rate, the training momentum, the batch size, the number of hidden layers, and the number of nodes in each hidden layer. I experimented with each variable in isolation and my findings are detailed below.'
        },
      ],
      image: [],
    },
    {
      subheading: 'Training Epochs',
      paragraph: [
        {
          type: 'indented',
          content: 'I varied the number of training epochs between 10 and 200. The network’s accuracy peaks around 50 epochs, beyond which performance suffers. I hypothesize that after about 50 epochs, the network’s weights become overfitted to the training data and no longer generalize properly to the test dataset.',
          imagePosition: 'right',
          imageSrc: g1,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'Learning Rate',
      paragraph: [
        {
          type: 'indented',
          content: 'I experimented with four different learning rates ranging from 0.001 to 0.05. As the learning rate increased, network performance decreased. It seems that beyond a learning rate of 0.001, the network learns too quickly and jumps over local error minima.',
          imagePosition: 'right',
          imageSrc: g2,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'Momentum',
      paragraph: [
        {
          type: 'indented',
          content: 'I tried four momentums ranging from 0.3 to 0.9. As momentum increased, so too did the network\’s accuracy. It is likely that greater momentum helps the network avoid getting caught in local minima. Momentum helps carry the network\’s parameters over a shallow local minimum in search of smaller errors. If this value is not large enough, the network’s parameters may resist change in response to a positive gradient.',
          imagePosition: 'right',
          imageSrc: g3,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'Batch Size',
      paragraph: [
        {
          type: 'indented',
          content: 'I varied batch size from 2 samples per batch to 12 samples per batch. It should not be particularly surprising that batch size had very little effect on the network\’s performance. All that the batch size dictates is the number of samples we iterate over before adjusting the network\’s parameters according to the error gradient. This is not particularly consequential because in the end we are still using the same number of training samples.',
          imagePosition: 'right',
          imageSrc: g4,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'Hidden Layers',
      paragraph: [
        {
          type: 'indented',
          content: 'I tested four different hidden layer architectures. One hidden layer is just a ReLU function. Three is two ReLU functions with a linear transformation layer in between. Five and seven follow this same pattern. The network performed best with three hidden layers. One layer likely does not transform enough information, while five and seven do not produce any meaningful transformations.',
          imagePosition: 'right',
          imageSrc: g5,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'Network Parameters',
      paragraph: [
        {
          type: 'indented',
          content: 'I examined the effect of the number of parameters on network accuracy. The minimum number of parameters I tried was 8448 - given an input layer with dimensions (21, 256), an output layer with dimensions (256, 12), and a ReLU layer in between, this was the smallest reasonable number of parameters. I tried architectures up to 551,936. However, including more nodes and weights to train did not improve network performance. It\’s possible that information was decoded so finely that some was actually lost in translation through the network.',
          imagePosition: 'right',
          imageSrc: g6,
          imageCaption: '',
        },
      ],
      image: [],
    },
    {
      subheading: 'The Solution',
      paragraph: [
        {
          type: 'text',
          content: 'After conducting the above experiments with network parameters, I selected the optimal values from each test case. The specific features of the network architecture are as follows:',
        },
        {
          type: 'u-list',
          content: ['Training epochs: 50', 'Learning rate: 0.001', 'Momentum: 0.9', 'Batch size: 4', 'Hidden layers: 3', 'Parameters: 142,592'],
        },
        {
          type: 'text',
          content: 'The final network has an input layer with 21 nodes - one for each of the 21 input features of each donor. Each feature is some data point that most universities are likely to have about their candidate donors. This input layer feeds into a nonlinear ReLU layer with 256 node input. The ReLU layer outputs to another linear layer with 256 node input and 512 node output, which gets passed to another ReLU layer. This ReLU layer sends its data to the output layer, which transforms the 512 node receipt into a 12 node classification. The node with maximum activation in the output layer becomes the network\’s predicted classification.',
        },
      ],
      image: [
        {
          src: m2,
          caption: 'Diagram of neural network classifier architecture',
        },
      ],
    },
    {
      subheading: 'Analysis',
      paragraph: [
        {
          type: 'text',
          content: 'After training the network, I tested its performance using the 350-sample test dataset I compiled. I conducted two iterations of testing: one with the standard 12 classes and one with the custom nonlinear activation function that reduces the classification down to 5 classes. Doing so nearly doubled the classifier\’s accuracy. With 12 classes, the classifier\’s peak performance was 42%. That, on its own, signifies that there lie meaningful relationships in the data that the neural network was latching onto. Otherwise, the network would not be able to perform at more than five times random chance. Still, the network performed best at the two extremes of the classes - $0 and $25K+. This makes sense because there is likely the biggest difference in features across non-donors and major donors. But accuracy suffered in the middle classes where distinctions between dollar amounts were not meaningful.',
        },
        {
          type: 'text',
          content: 'With 5 classes, however, the classifier\’s peak performance was 76%. It performed relatively similarly across each donation bracket, with its most accurate predictions coming in the $25K+ bracket at 83.30%. Given that this project was led by a desire to predict major donors, this result is highly encouraging. A classifier that operates at 76% may be accurate enough for deployment in fundraising efforts in higher education. At the very least, the accuracy quota laid out in the original project proposal was 75%, which we have just exceeded with this model.'
        },
        {
          type: 'text',
          content: 'Still, what Marts & Lundy wants me to answer is: how can we predict major donors. A $25K+ donation is well and good, but it is not, by any means, a $1M+ principal donation. To that I have two responses. First, my model was limited by the data that Advizor supplied and there were no donation distinctions beyond $25K. Second, and most importantly, if a neural network was able to discern meaningful differences among donors up to $25K, I predict that it would have an even easier time delineating between a non-donor and $1M+ donation. If we can get our hands on principal donation data, a classifier trained on it will likely perform just as well, if not better.'
        },
      ],
      image: [
        {
          src: g7,
          caption: '',
        },
        {
          src: g8,
          caption: '',
        },
      ],
    },
    {
      subheading: '',
      paragraph: [
        {
          type: 'text',
          content: 'We also wanted to know which features of donors were most predictive of their likelihood to donate. I conducted a linear regression on the data, building a matrix of coefficients, the weights of which indicated how predictively potent a given feature was. Based on this regression model, I found that the most indicative features were, in order:',
        },
        {
          type: 'u-list',
          content: ['Dollar amount of lifetime total commitment', 'Number of gifts over the last 5 years', 'Number of gifts over last 6-10 years', 'Whether or not the candidate is an alumni', 'Whether or not the candidate has a reunion upcoming in the next 5 years'],
        },
        {
          type: 'text',
          content: 'What this indicates, at least in my eyes, is that a donor\’s behavior in the past will indicate their behavior in the future. In other words, if a donor has made a donation before, they are likely to do it again and in greater sums. Also, a donor\’s commitment to the university will allude to whether or not they are likely to donate. If they are an alumni or if they have a reunion in their future, they are more likely to give than other candidates.',
        },
        {
          type: 'text',
          content: 'Future projects ought to focus on (a) amassing larger datasets with more samples of major donors and (b) training classifiers tailored to an individual institution\’s data. More instances of principal donations will help us build a classifier that identifies likely donors beyond the $25K cap on the Advizor dataset. Training classifiers tailored to an individual institution\’s data will help us discern whether specific institutions have unique patterns of principal donations, or whether indicators of principal philanthropy are ubiquitous across higher education and fundraising at large.',
        },
        {
          type: 'text',
          content: 'However, now that the foundations are in place, such projects will be very straightforward. With proper data, any university can leverage their alumni records to optimize where they direct their fundraising resources. It will all come down to what type of data we are able to collect.',
        },
      ],
      image: [],
    },
  ],
  relatedPages: [
    {
      title: 'View Code on GitHub',
      link: 'https://github.com/benlehrburger/Marts-Lundy',
    },
    {
      title: 'Read the Documentation',
      link: 'https://drive.google.com/uc?id=1Oq8sISI9g7Be4m6P5n2k9xOU6npbaVQz',
    },
  ],
};

export default mnl_project;