import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingImg from "@images/loading.gif";

const Button = styled.button`
  border-radius: 2rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: rgb(255, 232, 239);
  padding: 10px;
  color: rgb(240, 68, 123);
  margin: auto;
  width: 100%;
`;

const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 2rem;
`;

export default function Loading() {
  const StyledLoading = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    display: flex;

    & > * {
      margin: auto;
    }
  `;
  const [error, setError] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(true);
    }, 5000);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  return (
    <StyledLoading>
      {error ? (
        <div>
          <Text>
            非常遗憾。
            您的浏览器过于老旧，已经无法正常使用该网站。出于对用户体验的考虑，恳请您请下载最新版本的Chrome浏览器。这样对您而言也能享受更流畅更舒适的操作体验。
            最后，感谢您的支持。
          </Text>
          <div>
            <Button
              onClick={() => {
                window.open("https://www.google.cn/intl/zh-CN/chrome/");
              }}
            >
              一键下载
            </Button>
          </div>
        </div>
      ) : (
        <img src={LoadingImg} />
      )}
    </StyledLoading>
  );
}
