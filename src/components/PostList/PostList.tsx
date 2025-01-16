import './PostList.css'
import myPhote from '../../assets/myPhote.jpg'
import likes from '../../assets/likes.svg'
import comments from '../../assets/comments.svg'
import share from '../../assets/share.svg'
import save from '../../assets/save.svg'
import avatar2 from '../../assets/avatar2.svg'
import options from '../../assets/options.svg'
const PostList = () => {
    return (
        <div className='PostList'>
            <div className='post__header'>
                <button className='post__header--avatar'><img src={avatar2} />
                    <h3 className='post__header--name'>johndoe</h3></button>
                <div className='post__header--options'><img src={options} /></div>
            </div>
            <div className='postLIst__image'><img width={600} height={600} src={myPhote} /></div>
            <div className='post__footer'>
                <div className='post__footer--actions'>
                    <div className='post__footer--actleft'>
                        <img width={24} height={24} src={likes} />
                        <img width={24} height={24} src={comments} />
                        <img width={24} height={24} src={share} />
                    </div>
                    <img width={24} height={24} src={save} />
                </div>
                <div className='post__footer--description'>
                    <div className='post__footer--likes'>9.999 likes</div>
                    <div className='post__footer--description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</div>
                    <div className='post__footer--seecomments'>See 99 comments</div>
                    <div className='post__footer--data'>9 HOURS AGO</div>
                </div>
                <div className='post__footer--comments'></div>
            </div>

        </div>
    )
}

export default PostList
