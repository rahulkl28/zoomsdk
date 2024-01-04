import React, { useEffect } from "react";
// import { ZoomMtg } from "@zoomus/websdk";

const Meeting = ({ payload , userName}) => {
  useEffect(() => {
    const  initializeZoomSDK = async () => {
      try {
        const { ZoomMtg } = await import("@zoomus/websdk");
        ZoomMtg.setZoomJSLib("https://source.zoom.us/2.18.2/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();




        ZoomMtg.generateSDKSignature({
          meetingNumber: payload.meetingNumber,
          role: payload.role,
          sdkKey: payload.sdkKey,
          sdkSecret: payload.sdkSecret,
          success: (signature) => {
            ZoomMtg.init({
              leaveUrl: payload.leaveUrl,
              success: (data) => {
                ZoomMtg.join({
                  meetingNumber: payload.meetingNumber,
                  sdkKey: payload.sdkKey,
                  signature: signature.result,
                  userName: userName || payload.userName,
                  userEmail: payload.userEmail,
                  passWord: payload.passWord,
                  tk: '',
                  success: () => {
                    console.log('--Joined--');
                  },
                  error: (error) => {
                    console.error("Error joining Zoom meeting:", error);
                  },
                });
              },
              error: (error) => {
                console.error("Error initializing Zoom:", error);
              },
            });
          },
          error: (error) => {
            console.error("Error generating Zoom SDK signature:", error);
          },
        });
      } catch (error) {
        console.error("Error loading Zoom SDK:", error);
      }
    };

    initializeZoomSDK();

    
  }, [payload, userName]); 

  return <></>;
};

export default Meeting;
