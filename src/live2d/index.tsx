import { LAppDelegate } from './lappdelegate';
import React, { useEffect } from 'react';

type Prop = {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    PathFull?: string;
    MobileShow?: boolean;
    width?: string;
    height?: string;
    ModelName?: string;
}

const RenderLive2d: React.FC<Prop> = (props) => {

  let containerStyle: React.CSSProperties = {
      position: 'fixed',
      top: props.top ? props.top : '',
      right: props.right ? props.right : '0',
      bottom: props.bottom ? props.bottom : '0',
      left: props.left ? props.left : '',
      width: props.width ? props.width : window.innerWidth,
      height: props.height ? props.height : window.innerHeight
  }

  let canvasStyle: React.CSSProperties = {
    position: 'relative',
    top: props.top ? props.top : '',
    right: props.right ? props.right : '0',
    bottom: props.bottom ? props.bottom : '0',
    left: props.left ? props.left : ''
  }

  useEffect(() => {
    if (!navigator.userAgent.match(/mobile/i) || props.MobileShow == true) {
        if (LAppDelegate.getInstance().initialize() == false) {
            return;
        }
        LAppDelegate.getInstance().run();
    }
  }, []);

  return (
    <div
        style={containerStyle}
        id="live2d-container">
        <canvas
            id="live2d"
            style={canvasStyle}
            width={props.width ? props.width : '300'}
            height={props.height ? props.height : '500'}
            className="live2d"
        >
        </canvas>
    </div>
  )
}

export default RenderLive2d