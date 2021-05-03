import React from 'react'
import {Podcast, PodcastSamples} from '../styles/HomeStyles'

function PodcastSection() {
    return (
        <div>
            <Podcast>
                <h1 className="podTitle">The Podcast</h1>
                <p>Join our solo episodes and interviews with guests who, like you, are on their journey to a personal resnaissance.</p>
            
                <PodcastSamples>
                    <div className="pod-sample one">
                       <img></img>
                    </div>
              
                    <div className="pod-sample two">
                        <img></img>
                    </div>
                    <div className="pod-sample three">
                        <img></img>
                    </div> 

                </PodcastSamples>
            </Podcast>
        </div>
    )
}

export default PodcastSection