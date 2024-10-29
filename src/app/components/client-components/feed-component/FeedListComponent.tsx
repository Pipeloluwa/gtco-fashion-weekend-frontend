
"use client";
import { interFont, rubikFont } from '@/app/fonts/fontsConfig';
import { inView } from "framer-motion";
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setYoutubeState } from '@/app/state_management/reducers/client-reducers/youtubeApiState';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { AnimatePresence, motion } from 'framer-motion';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Button } from '@material-tailwind/react';

interface IVideoItem {
    id: { videoId: string };
    snippet: { title: string; description: string };
  }
  
  
  interface ICommentDataBase {
    snippet: {
      topLevelComment: {
        snippet: {
          textDisplay: string;
        };
      };
    };
  }
  
  
  interface ICommentData{
    [key:string]: ICommentDataBase[];
  }
  
  
  
  interface IDescriptionDataBase {
    snippet: {
      description: string
    }
  }
  
  
  interface IDescriptionData {
    [key:string]: IDescriptionDataBase;
  }

  

const FeedListComponent = () => {
    const dispatch= useDispatch();

    const lastVideoId: React.MutableRefObject<HTMLDivElement | null>= useRef(null);

    const [videos, setVideos] = useState<IVideoItem[]>([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const channelId= "UCPTp1DKGYEyUDjdjA_p1tbQ";
    const youtubeApiKey= "AIzaSyCcbmgZJVVRWWsknqQQNdsULT18V1PVFD4";
  
    const [activeVideoDescription, setActiveVideoDescription]= useState<IDescriptionData>({});
    const [activeVideoComment, setActiveVideoComment]= useState<ICommentData>({});


    
    const fetchVideos = async () => {
        try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=10&key=${youtubeApiKey}${   

            nextPageToken ? `&pageToken=${nextPageToken}` : ''
            }`
        );

        const newVideos = response.data.items;

        setVideos([...videos, ...newVideos]);
        setNextPageToken(response.data.nextPageToken);
        dispatch(setYoutubeState({stateValue: true}));
        } catch (error) {
        console.log(error);
        }
    };


    const fetchSingleVideo= async (videoId: string) => {
        if (!activeVideoDescription[videoId]){
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${youtubeApiKey}`
        );
        setActiveVideoDescription(values => ({...values, [videoId]: response.data?.items[0]?.snippet?.description}));
        return;
        }

        const changedValues: IDescriptionData= activeVideoDescription;
        delete changedValues[videoId];
        setActiveVideoDescription({...changedValues});
        
    }


    const commentDataFunction= async (videoId: string) => {
        try {
        if (!activeVideoComment[videoId]){
            const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${youtubeApiKey}&textFormat=plainText`
            );
            setActiveVideoComment(values => ({...values, [videoId]: response.data?.items}));
            return;
        }

        const changedValues: ICommentData= activeVideoComment;
        delete changedValues[videoId];
        setActiveVideoComment({...changedValues});

        } catch (error) {
        console.error(error);
        }
    }


    const loadMoreVideos = () => {
        if (nextPageToken) {
        fetchVideos();
        }
    };

    useEffect(() => {
        if (lastVideoId.current){
          inView(lastVideoId.current, () => {
            loadMoreVideos();
          });
        }
      }, [lastVideoId.current]);
    
    
    
    useEffect(() => {
        fetchVideos();
    }, []);


    return (
        <div className='flex flex-col gap-y-24'>
            {
            videos.length== 0
            ? 
                <div className=' flex flex-col gap-y-24'>
                <div className='aspect-video bg-gray-300 animate-pulse' />
                <div className='aspect-video bg-gray-300 animate-pulse' />
                <div className='aspect-video bg-gray-300 animate-pulse' />
                </div>
            
            
            :
            videos.map((video, index) => (
                index === videos.length-1
                ?

                <div ref= {lastVideoId} key={video.id.videoId} className='flex flex-col gap-y-5' >
                {/* <video src={video.id.videoId}  className='aspect-auto shadow-md drop-shadow-lg shadow-gray-800'>

                </video> */}

                <LiteYouTubeEmbed id={video.id.videoId.toString()} title= {video.snippet.title.toString()}/>
                <div className='w-full flex flex-col items-start gap-y-4'>

                    <div className='w-full flex sm:flex-row flex-col items-center justify-between p-3 shadow-sm shadow-gray-300'>
                    <h2 className='text-xl font-bold'>{video.snippet.title}</h2>
                    </div>

                
                    <div className='w-full flex flex-col gap-y-2'>
                    <div>
                        <span>
                            {
                            activeVideoDescription[video.id.videoId]
                            ? `${activeVideoDescription[video.id.videoId]}`

                            : `${video.snippet.description}`
                            }
                        </span>
                        
                        <button onClick={() => fetchSingleVideo(video.id.videoId)} className='pl-3 text-orange-800'>
                            {
                            activeVideoDescription[video.id.videoId]
                            ? "Collapse"

                            : "Read more..."
                            }
                        </button>
                    </div>


                    <Button 
                        onClick={() =>  commentDataFunction(video.id.videoId)} 
                        className={`border ${activeVideoComment[video.id.videoId] ? "border-orange-800" : "border-gray-300"} p-2 bg-gray-100 text-orange-800 flex justify-between items-center`}  >
                        
                        <span className={`${rubikFont.className} tracking-widest`}>
                            {"View All Comments"}
                        </span>

                        <span>
                        {
                            activeVideoComment[video.id.videoId]
                            ? <BiChevronUp className='size-[30px]'/>

                            : <BiChevronDown className='size-[30px]'/>
                        }
                        </span>

                    </Button>

                    </div>


                    {
                    activeVideoComment[video.id.videoId]
                    &&
                    <AnimatePresence>
                        <motion.div initial={{y: -50}} animate={{y:0}}  key={`${video.id.videoId}motion`} className={`${interFont.className} text-gray-800 text-sm ml-8 flex flex-col gap-y-3`}>
                            {
                            activeVideoComment[video.id.videoId].map((comment, index) => 
                                <p key={`comment${index}`} className='border-b border-gray-300 pb-2'>
                                {comment.snippet.topLevelComment.snippet.textDisplay.toString()}
                                </p>
                            )
                            }
                            
                        </motion.div>
                    </AnimatePresence>
                    }


                </div>
                
                
                </div>




                
                :
                <div key={video.id.videoId} className='flex flex-col gap-y-5' >
                {/* <video src={video.id.videoId}  className='aspect-auto shadow-md drop-shadow-lg shadow-gray-800'>

                </video> */}

                <LiteYouTubeEmbed id={video.id.videoId.toString()} title= {video.snippet.title.toString()}/>
                <div className='w-full flex flex-col items-start gap-y-4'>

                    <div className='w-full flex sm:flex-row flex-col items-center justify-between p-3 shadow-sm shadow-gray-300'>
                    <h2 className='text-xl font-bold'>{video.snippet.title}</h2>
                    </div>

                
                    <div className='w-full flex flex-col gap-y-2'>
                    <div>
                        <span>
                            {
                            activeVideoDescription[video.id.videoId]
                            ? `${activeVideoDescription[video.id.videoId]}`

                            : `${video.snippet.description}`
                            }
                        </span>
                        
                        <button onClick={() => fetchSingleVideo(video.id.videoId)}  className='pl-3 text-orange-800'>
                            {
                            activeVideoDescription[video.id.videoId]
                            ? "Collapse"

                            : "Read more..."
                            }
                        </button>
                    </div>


                    <Button 
                        onClick={() =>  commentDataFunction(video.id.videoId)} 
                        className={`border ${activeVideoComment[video.id.videoId] ? "border-orange-800" : "border-gray-300"} p-2 bg-gray-100 text-orange-800 flex justify-between items-center`}  >
                        
                        <span className={`${rubikFont.className} tracking-widest`}>
                            {"View All Comments"}
                        </span>

                        <span>
                        {
                            activeVideoComment[video.id.videoId]
                            ? <BiChevronUp className='size-[30px]'/>

                            : <BiChevronDown className='size-[30px]'/>
                        }
                        </span>
                    </Button>

                    </div>

                    {
                    activeVideoComment[video.id.videoId]
                    &&
                    <AnimatePresence>
                        <motion.div initial={{y: -50}} animate={{y:0}} key={`${video.id.videoId}motion`}  className={`${interFont.className} text-gray-800 text-sm ml-8 flex flex-col gap-y-3`}>
                            {
                            activeVideoComment[video.id.videoId].map((comment, index) => 
                                <p key={`comment${index}`} className='border-b border-gray-300 pb-2'>
                                {comment.snippet.topLevelComment.snippet.textDisplay.toString()}
                                </p>
                            )
                            }
                            
                        </motion.div>
                    </AnimatePresence>
                    }

                </div>

                
                
                </div>
            ))
            }


        </div>
    );
}

export default FeedListComponent