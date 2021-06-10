import React from 'react';
import './skeleton.css';
function Skeleton(props) {
        return (
            <section>
                <div class="card-skeleton">
                  <div class="animated-background"> 
                    <div class="card-skeleton-img"></div>
                    <div class="skel-mask-container">
                      <div class="skel-mask skel-mask-1"></div>
                      <div class="skel-mask skel-mask-6"></div>
                    </div>
                  </div>
                </div>
            </section>
    );
}

export default Skeleton;