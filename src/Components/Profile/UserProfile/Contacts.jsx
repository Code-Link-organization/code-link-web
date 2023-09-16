/* eslint-disable react/prop-types */
import GitHubIcon from '../../../assets/images/profile/contacts/github.svg';
import BehanceIcon from '../../../assets/images/profile/contacts/behance.svg';
import LinkedinIcon from '../../../assets/images/profile/contacts/linkedin.svg';
import TwitterIcon from '../../../assets/images/profile/contacts/twitter.svg';
import FacebookIcon from '../../../assets/images/profile/contacts/facebook.svg';

function Contacts({ githubUrl, linkedinUrl, behanceUrl, facebookUrl, twitterUrl }) {
  const contactLinks = [
    { name: 'GitHub', url: githubUrl, icon: GitHubIcon  },
    { name: 'LinkedIn', url: linkedinUrl, icon: LinkedinIcon  },
    { name: 'Behance', url: behanceUrl, icon: BehanceIcon },
    { name: 'Facebook', url: facebookUrl, icon: FacebookIcon  },
    { name: 'Twitter', url: twitterUrl, icon: TwitterIcon },
  ].filter(item => item.url&& item.url.length > 6);

  return (
    <div className='pt-4'>
      <span className="border-t-[rgba(251,249,247,1)] border-t-[11px] absolute left-0 w-full"></span>
      <h2 className='pt-5'>Contacts</h2>    
      {contactLinks.length===0?<p className='text-center font-semibold py-2'>No Contacts</p>:
      <ul className='flex gap-3 mt-3'>
         
        {contactLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer"><img src={link.icon} /></a>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default Contacts;
