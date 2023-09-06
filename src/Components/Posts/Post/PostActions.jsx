import likeIcon from '../../../assets/images/posts/icons8-like-24 2.svg'
import shareIcon from '../../../assets/images/posts/icons8-share-30 2.svg'
import commentIcon from '../../../assets/images/posts/image 79.svg'

function PostActions() {
    const actions=[{
        icon:likeIcon,
        text:'Like'
                   },
{
        icon:commentIcon,
        text:'Comment'
                   },
{
        icon:shareIcon,
        text:'Share'
                   }                                      
]
  return (
    <div className='flex justify-between border-y-[1px] border-y-primary border-opacity-30 p-4'>
   {actions.map((action,index)=><button className='flex space-x-3' key={action.text}><img src={action.icon}/><span>{action.text}</span></button>
   )}
    </div>
  )
}

export default PostActions