import React from 'react'
import './style.scss'
import { CardMedia } from '@mui/material'
import about_banner from '../assets/about/about_banner.png'
import our__advantage from '../assets/about/our_advantage.png'
import check from '../assets/about/check-mark.png'

const About = () => {
  return (
 <div className="aboutContainer">
    <div className="aboutBanner">
    <CardMedia
                  component="img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  image={about_banner}
                  alt="about"
                />  
                <div className="abouts">
                    <h1>About</h1>
                    <p>
                    Hello My Doctor की सेवा अब  पटना, छपरा, सिवान और गोपालगंज में उपलब्ध हैं, ताकि आपकी स्वास्थ्य संबंधित समस्याओं का सही समाधान हो पाए ।
                     आपके लिए एक कॉल, एक क्लिक की दूरी पर हम उपलब्ध हैं - हमारे कॉल सेन्टर, वेबसाइट और application के माध्यम से आज ही हमसे संपर्क करें और
                      अपने Appointment को बुक करें, क्योंकि आपकी सेहत हमारी प्राथमिकता है।


                    </p>
                </div>
    </div>
    <div className="discriptions">
        <p>
            

नमस्कार ! Hello My Doctor के प्लेटफार्म पर आपका स्वागत है स्वास्थ्य क्षेत्र में यह पहला स्टार्टअप है जो ग्रामीण भारत के मरीजों के लिए विशेषतौर पर समर्पित है। यह प्लेटफार्म उन लोगों के लिए वरदान साबित हो रहा है जिनके घर के युवा वर्ग को कमाई या पढ़ाई के लिए घर छोड़ परदेस रहना पड़ता है और जिनके घर के बुजुर्गों को मजबूरन अकेले रहना पड़ता है एवम चिकित्सा संबंधी कार्य के लिए डॉक्टर से दिखाने के लिए दूसरे लोगों पर आश्रित रहना पड़ता है।</p>

      <p>शहर से दूर ग्रामीण क्षेत्रों में रहने वाले लोगों के लिए भी यह सेवा काफी फायदेमंद है Hello My Doctor की सहायता से दूर शहर में स्थित डॉक्टर के पास समय से नंबर लगाकर अपना दिन भर का समय बर्बाद होने से बचा सकते हैं।</p> 


<p>वर्तमान में शहर के अच्छे डॉक्टर के पास नंबर लगाने के लिए सुबह ही बहुत जल्द घर से निकलना पड़ता है जिससे आपके दिन भर के समय के साथ-साथ पैसे की बर्बादी भी होती है लेकिन अब आप सिर्फ एक कॉल HMD की सहायता से डॉक्टर का नंबर लगवा सकते हैं और अपना समय बचा सकते हैं।</p>
   
   <p>HMD मरीज़ों के लिए एक समर्पित प्लेटफार्म है जहां आप क्लिक या कॉल करके अपने डॉक्टर तक पहुंच सकते हैं इसकी सहायता से आप डॉक्टर के पास नंबर लगा सकते हैं और घर बैठे दवा मंगा सकते हैं या देश के प्रतिष्ठित लैब द्वारा घर बैठे लैब जांच भी करा सकते हैं।</p>
   

   <p>HMD का अपना एक ऐप भी है जिसकी सहायता से आप घर बैठे अपने शहर के डॉक्टर से संबंधित सारी जानकारियां प्राप्त कर सकते हैं और घर बैठे उनका अपॉइंटमेंट भी ले सकते हैं शहर में उपस्थित सभी डॉक्टरों की सूची में से आप अपने आवश्यकतानुसार विशेषज्ञ डॉक्टर से संपर्क कर सकते हैं।</p>
<p>देश विदेश बैठ कर भी आप अपने शहर में प्रैक्टिस कर रहे विशेषज्ञ डॉक्टर की सूची प्राप्त कर सकते हैं उन से अपॉइंटमेंट बुक करा कर अपने घर के लोगों को दिखा सकते हैं।

</p>
<p>इस प्लेटफार्म की सहायता से आप घर से बाहर रहते हुए भी अपने घर वालों का ख्याल रख सकते हैं उनको शहर के अच्छे डॉक्टर के पास दिखा सकते हैं उनके लिए आप दवा भेज सकते हैं और उनका लैब जाँच करा सकते है। Hello My Doctor संस्था पिछले 2.5 सालों से बिहार में अपना योगदान दे रही है और लगभग 65 हजार से ज़्यादा मरीज़ों को अपनी सेवा दे चुकी है ।

</p>
    </div>

<div className="ourAdvantage">
<CardMedia
                  component="img"
                  className='our__advantage'
                  // sx={{  }}
                  image={our__advantage}
                  alt="about"
                /> 
                <div className="marks">
                  <h2>Our Advantage</h2>
                  <ul>
                    <li>
                       <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  image={check}
                  alt="about"
                /> 
                <p> समय की बचत</p></li>
                    <li>
                    <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  image={check}
                  alt="about"
                /> 
                       <p>घर बैठे डॉक्टर या क्लिनिक संबंधित सूचना</p></li>
                    <li>
                    <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  image={check}
                  alt="about"
                /> 
                       <p>सभी डॉक्टर्स के बारे में सम्पूर्ण जानकारी (नाम, विशेषता, फी, पता)</p></li>
                    <li> 
                    <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  image={check}
                  alt="about"
                /> 
                      <p> रोग से संबंधित उचित और विशेषज्ञ डॉक्टर का सुझाव</p></li>
                  </ul>
                </div>
</div>

 </div>
  )
}

export default About