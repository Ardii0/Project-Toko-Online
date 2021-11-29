<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light bg-success"
      style="padding-left: 75px; padding-right: 75px; height: 124px"
    >
      <span
        class="text-light"
        style="position: absolute; margin-left: 13rem; font-size: 14px"
      >
        <div class="dropdown-navbar">
          <a href="#" id="navdropdown" class="nav-link"
            ><img
              style="position: absolute; margin-top: 2px; margin-left: 4px"
              src="
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNi4zODE5IDEwLjQ0OTdDMTYuMzgxOSAxMC40NDk3IDE2LjM4MjYgMTAuNDQ5NyAxNi4zODI2IDEwLjQ1MDVDMTYuMzc5NiA5LjY5ODI1IDE2LjM0NjYgOC45NDYgMTYuMjc4NCA4LjE5OUMxNS45MzExIDQuMzggMTIuNzc3NCAxLjUgOC45NDI2MyAxLjVDNS4xMDc4OCAxLjUgMS45NTQ4NyA0LjM4IDEuNjA2ODggOC4xOTlDMS40NjQzOCA5Ljc2NDI1IDEuNDY0MzggMTEuMzUxMiAxLjYwNjg4IDEyLjkxNjVDMS42NDIxMiAxMy4zMDU3IDEuOTY5MTMgMTMuNTk4MyAyLjM1MzEzIDEzLjU5ODNDMi4zNzU2MyAxMy41OTgzIDIuMzk4ODggMTMuNTk3NSAyLjQyMjEzIDEzLjU5NTNDMi42MjYxMyAxMy41NzY1IDIuODAzMTMgMTMuNDc2OCAyLjkyNTM3IDEzLjMzMkMzLjE3Mjg4IDEzLjQzNCAzLjQzNjEyIDEzLjUgMy43MTU4NyAxMy41QzQuODY2MzcgMTMuNSA1LjgyNzEzIDEyLjU1OCA1LjkzMDYyIDExLjMyNzJDNS45NzcxMiAxMC43NzY3IDUuOTc3MTIgMTAuMjIzMyA1LjkzMDYyIDkuNjcyNzVDNS44MjYzOCA4LjQ0MiA0Ljg2NTYyIDcuNSAzLjcxNTg3IDcuNUMzLjU0Nzg3IDcuNSAzLjM4NTg4IDcuNTI0IDMuMjI4MzggNy41NjIyNUMzLjgyMzg4IDQuOTE0NzUgNi4xNTQxMyAzIDguOTQyNjMgM0MxMS43Mjc0IDMgMTQuMDU1NCA0LjkxMDI1IDE0LjY1NDYgNy41NTI1QzE0LjUxMjEgNy41MjE3NSAxNC4zNjY2IDcuNSAxNC4yMTU5IDcuNUMxMy4wNjU0IDcuNSAxMi4xMDQ2IDguNDQyIDEyLjAwMTEgOS42NzI3NUMxMS45NTQ2IDEwLjIyMzMgMTEuOTU0NiAxMC43NzY3IDEyLjAwMTEgMTEuMzI3MkMxMi4xMDM5IDEyLjU0NDUgMTMuMDQ1OSAxMy40NzY4IDE0LjE3OTkgMTMuNDk2M0MxMy41MzY0IDE0LjM0MzggMTIuNDQ1OSAxNS4wMTUgMTEuMTMwNCAxNS4zNzQzQzEwLjk0ODEgMTQuNzg0NyAxMC4zNDM2IDE0LjMzMTggOS41ODUzNyAxNC4yNzQ4TDkuNTYyODcgMTQuMjczM0M5LjE1MDM3IDE0LjI0MjUgOC43MzQ4OCAxNC4yNDI1IDguMzIyMzggMTQuMjczM0w4LjI5OTg3IDE0LjI3NDhDNy4zOTAxMiAxNC4zNDMgNi42OTI2MyAxNC45NzkgNi42OTI2MyAxNS43NDAyQzYuNjkyNjMgMTYuNTEyIDcuMzk5MTMgMTcuMTU3IDguMzIyMzggMTcuMjI2N0M4LjczNDg4IDE3LjI1NzUgOS4xNTAzNyAxNy4yNTc1IDkuNTYyODcgMTcuMjI2N0M5Ljc4MDM3IDE3LjIxMDIgOS45ODUxMyAxNy4xNiAxMC4xNzI2IDE3LjA4NUMxMy40MjAxIDE2LjY4OSAxNS45NTUxIDE0Ljc1MjUgMTYuMjc1NCAxMi4yNjc3QzE2LjM1MzQgMTEuNjY0IDE2LjM4NjQgMTEuMDU2NSAxNi4zODE5IDEwLjQ0OTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
            <span class="size12" style="padding-left: 23px">Bantuan 24/7</span>
            <img
              style="position: absolute; margin-top: 2px"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSIjODU4NTg1Ii8+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjUiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjciPgogICAgICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMCkiPgogICAgICAgIDxyZWN0IHk9IjE4IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDE4KSIgZmlsbD0id2hpdGUiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
          /></a>
          <div
            class="dropdown-content-navbar"
            style="padding: 15px; min-width: 250px"
          >
            <a
              id="navdropdown"
              href="https://www.blibli.com/faq/topic/pembayaran/"
              >Pembayaran</a
            ><br />
            <a
              id="navdropdown"
              href="https://www.blibli.com/faq/topic/pengiriman"
              >Pengiriman</a
            ><br />
            <a
              id="navdropdown"
              href="https://www.blibli.com/faq/topic/pengembalian-produk/"
              >Pengembalian</a
            ><br />
            <a id="navdropdown" href="https://www.blibli.com/faq/"
              >Panduan Lainnya</a
            ><br /><br />
            <span> Bantuan 24/7 </span><br />
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                /></svg
              >&nbsp;&nbsp;&nbsp;0804 1 871 871</span
            ><br />
            <a id="navdropdown" href="customer.care@jualjual.com"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                /></svg
              >&nbsp;&nbsp;customer.care@jualjual.com</a
            >
          </div>
        </div>
      </span>
      <div
        class="tulisanatas"
        style="
          position: absolute;
          margin-left: 60rem;
          margin-top: -5rem;
          font-size: 14px;
        "
      >
        <a id="navdropdown" href="https://seller.blibli.com/mulai-berjualan"
          >Jual di JualJual</a
        >&nbsp;&nbsp;&nbsp;
        <a id="navdropdown" href="https://www.blibli.com/promosi/poin-rewards"
          >JualJual Rewards</a
        >&nbsp;&nbsp;&nbsp;
        <a id="navdropdown" href="https://www.blibli.com/member/order/retail"
          >Cek Daftar Pesanan</a
        >
      </div>
      <span class="text-light" style="font-size: 14px">
        <div class="dropdown-navbar">
          <a href="#" id="navdropdown" class="nav-link">
            <img
              style="position: absolute; margin-top: 2px"
              src="
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMTAxNiAxLjAwMTQ0QzEzLjQ3NDkgMS4yMjQ5NCAxNC41NDI5IDIuMzMxMTkgMTQuNjk4MSAzLjY5MTY5QzE1LjA5ODYgNy4yMTQ0NCAxNS4wOTg2IDEwLjc4NjcgMTQuNjk4OSAxNC4zMDc5QzE0LjU0MzYgMTUuNjY5MiAxMy40NzU2IDE2Ljc3NTQgMTIuMTAyNCAxNi45OTg5QzExLjA3MjYgMTcuMTY2MiAxMC4wMzYxIDE3LjI1MDIgOC45OTk2MyAxNy4yNTAyQzcuOTYzMTMgMTcuMjUwMiA2LjkyNjYzIDE3LjE2NjkgNS44OTY4OCAxNi45OTg5QzQuNTIzNjMgMTYuNzc1NCAzLjQ1NTYzIDE1LjY2OTIgMy4zMDAzOCAxNC4zMDg3QzIuODk5ODggMTAuNzg1OSAyLjg5OTg4IDcuMjEzNjkgMy4zMDAzOCAzLjY5MTY5QzMuNDU1NjMgMi4zMzA0NCA0LjUyMzYzIDEuMjI0OTQgNS44OTc2MyAxLjAwMTQ0QzcuOTU1NjMgMC42NjYxODggMTAuMDQyMSAwLjY2NjE4OCAxMi4xMDE2IDEuMDAxNDRaTTguOTk5NjQgMTIuMDAwOUM4LjQ2Nzg5IDEyLjAwMDkgNy45ODcxNCAxMS43Mjg3IDcuNzEzMzkgMTEuMjcyN0w2LjEwNjg5IDguNTk1MTlDNS44OTM4OSA4LjIzOTY5IDYuMDA4NjQgNy43NzkxOSA2LjM2NDE0IDcuNTY2MTlDNi43MjAzOSA3LjM1MjQ0IDcuMTgwMTQgNy40Njg2OSA3LjM5MzE0IDcuODIzNDRMOC4yNTYzOSA5LjI2MTk0VjUuMjUwOTRDOC4yNTYzOSA0LjgzNjk0IDguNTkyMzkgNC41MDA5NCA5LjAwNjM5IDQuNTAwOTRDOS40MjAzOSA0LjUwMDk0IDkuNzU2MzkgNC44MzY5NCA5Ljc1NjM5IDUuMjUwOTRWOS4yNDAxOUwxMC42MDY5IDcuODIyNjlDMTAuODE5OSA3LjQ2Nzk0IDExLjI3OTYgNy4zNTE2OSAxMS42MzU5IDcuNTY1NDRDMTEuOTkxNCA3Ljc3ODQ0IDEyLjEwNjEgOC4yMzg5NCAxMS44OTMxIDguNTk0NDRMMTAuMjg1OSAxMS4yNzI3QzEwLjAxMjEgMTEuNzI4NyA5LjUzMTM5IDEyLjAwMDkgOC45OTk2NCAxMi4wMDA5Wk04Ljk5ODg3IDE2LjEyNTJDOC41ODQ4NyAxNi4xMjUyIDguMjQ4ODcgMTUuNzg5MiA4LjI0ODg3IDE1LjM3NTJDOC4yNDg4NyAxNC45NjEyIDguNTg0ODcgMTQuNjI1MiA4Ljk5ODg3IDE0LjYyNTJDOS40MTI4NyAxNC42MjUyIDkuNzQ4ODcgMTQuOTYxMiA5Ljc0ODg3IDE1LjM3NTJDOS43NDg4NyAxNS43ODk5IDkuNDEzNjIgMTYuMTI1MiA4Ljk5ODg3IDE2LjEyNTJaTTQuNzM1ODcgMTMuNTAwMkgxMy4yNjI2QzEzLjU4MDYgMTAuMjk3NyAxMy41NzE2IDcuMDU5MTkgMTMuMjA3OSAzLjg2MDQ0QzEzLjEyNzYgMy4xNjUxOSAxMi41NzM0IDIuNTk3NDQgMTEuODYwMSAyLjQ4MTE5QzEwLjkxMDYgMi4zMjY2OSA5Ljk1NDM3IDIuMjQ5NDQgOC45OTg4NyAyLjI0OTQ0QzguMDQzMzcgMi4yNDk0NCA3LjA4Nzg3IDIuMzI2NjkgNi4xMzgzNyAyLjQ4MTE5SDYuMTM3NjJDNS40MjQzNyAyLjU5NzQ0IDQuODY5MzcgMy4xNjUxOSA0Ljc4OTg3IDMuODYxMTlDNC40MjY4NyA3LjA1OTE5IDQuNDE3ODcgMTAuMjk2OSA0LjczNTg3IDEzLjUwMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
            />
            <span class="size12" style="padding-left: 20px"
              >Download Aplikasi Jualjual<img
                style="position: absolute; margin-top: 2px"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSIjODU4NTg1Ii8+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjUiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjciPgogICAgICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMCkiPgogICAgICAgIDxyZWN0IHk9IjE4IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDE4KSIgZmlsbD0id2hpdGUiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            /></span>
          </a>
          <div class="dropdown-content-navbar">
            <span id="navdropdown" href=""
              ><img
                style="margin-left: 30px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAMAAAC0CkrjAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA7Ld5jjWgJ6sezdcM4E8Uv2B/Aw6fAAAAvklEQVQ4y+2TWxKDIAxFwyu8qWb/i20oatGwgH70fESGM3MNDIETY0CsJ17JcS2FS0weBA1bqERVN9xBYuhCZpdEE/n10JlUUMP1RS03i0QW7NDY/xNm63k3tXQkt42rk23N2EkHqbdJ26wfJHsGo4foBLyJ5tNzBUsChNz774f1q9YiF/XXax24rC+1EmkoVjtAYdn4gOPJrfXFOnweEVLUUceHcoQ7YTwwcwb/kLZjNPdxKEHZxmAhpe98vgFwZCa4GCS3dwAAAABJRU5ErkJggg=="
                alt="logo android" /><img
                style="margin-left: 50px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAlCAMAAABiU6n+AAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAGuqE2jAP0OGxqJqMZPLAk3hYQcdpJAhK9YAAAADNSURBVDjLpZLdDoMgDIXLzwQUQZ3a93/TiTUuWTy92XdDwhcKp5QeMC4sBJmZeYS254OXdpY9soYb8Oqp2UoIe9jQabUzQbo8m7b87G598DVLnCXFYmt+33a0LKRtcZ4v1l3swM+Us1pmRDzsC1rbrg/IeqMebpYcshM1KtKS26u1yf6lI9LyASvSTm04l1NvjOhJuqaWj9gPu3QV4WX6tL4nVj9tx2/Xo3ek9X0UC7Kn76A/h7q4w6/T7PoiY2rECGOwMcn8dC5YP8izPhMUPVIVGaQ1AAAAAElFTkSuQmCC"
                alt="logo iphone" /></span
            ><br />
            <a
              style="color: white; margin-left: 20px; text-decoration: none"
              href="https://play.google.com/store/apps/details?id=blibli.mobile.commerce"
              target="_blank"
              >Android</a
            >
            <a
              style="color: white; margin-left: 45px; text-decoration: none"
              href="https://itunes.apple.com/id/app/blibli.com/id1034231507?l=id&amp;mt=8"
              target="_blank"
              >IOS</a
            >
          </div>
        </div>
      </span>
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img src="iconjualjual.png" alt="Logo Jualjual" width="50cm" /><span
            style="padding-top: 12px:; color: white"
            >Jualjual</span
          ></a
        >
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style="
            position: absolute;
            background-color: #115736;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            height: 30px;
            width: 130px;
            margin-top: 95px;
            padding: 7.5px;
          "
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>
            <li class="nav-item dropdown">
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMSIgeT0iMSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMzQ1MzcgOC4zNjM2M0M0LjQ1NDYyIDguNjQxMTMgNS42MTU2MiA4LjY0MTEzIDYuNzI1NjMgOC4zNjM2M0M3LjUzMTg4IDguMTYxODggOC4xNjExMyA3LjUzMjYzIDguMzYyODcgNi43MjYzOEM4LjY0MDM4IDUuNjE2MzcgOC42NDAzOCA0LjQ1NTM3IDguMzYyODcgMy4zNDUzN0M4LjE2MTEzIDIuNTM5MTIgNy41MzE4OCAxLjkwOTg3IDYuNzI1NjMgMS43MDgxMkM1LjYxNjM3IDEuNDMwNjIgNC40NTUzNyAxLjQzMDYyIDMuMzQ1MzcgMS43MDgxMkMyLjUzOTEyIDEuOTA5ODcgMS45MDk4NyAyLjUzOTEyIDEuNzA4MTIgMy4zNDUzN0MxLjQzMDYyIDQuNDU1MzcgMS40MzA2MiA1LjYxNjM3IDEuNzA4MTIgNi43MjYzOEMxLjkwOTg3IDcuNTMyNjMgMi41MzkxMiA4LjE2MTg4IDMuMzQ1MzcgOC4zNjM2M1pNMTQuNTQ2NiAxLjcwODg4QzE1LjM1MjkgMS45MTA2MiAxNS45ODIxIDIuNTM5ODcgMTYuMTgzOSAzLjM0NjEyQzE2LjQ2MTQgNC40NTUzNyAxNi40NjE0IDUuNjE2MzcgMTYuMTgzOSA2LjcyNjM4QzE1Ljk4MjEgNy41MzI2MyAxNS4zNTI5IDguMTYxODcgMTQuNTQ2NiA4LjM2MzYzQzEzLjQzNjYgOC42NDExMyAxMi4yNzU2IDguNjQxMTMgMTEuMTY1NiA4LjM2MzYzQzEwLjM1OTQgOC4xNjE4NyA5LjczMDEzIDcuNTMyNjMgOS41MjgzNyA2LjcyNjM4QzkuMjUwODcgNS42MTcxMyA5LjI1MDg3IDQuNDU2MTMgOS41MjgzNyAzLjM0NjEyQzkuNzMwMTMgMi41Mzk4NyAxMC4zNTk0IDEuOTEwNjIgMTEuMTY1NiAxLjcwODg4QzEyLjI3NTYgMS40MzEzNyAxMy40MzY2IDEuNDMxMzcgMTQuNTQ2NiAxLjcwODg4Wk02LjcyNTYzIDE2LjE4NDZDNS42MTU2MiAxNi40NjIxIDQuNDU0NjIgMTYuNDYyMSAzLjM0NTM3IDE2LjE4NDZDMi41MzkxMiAxNS45ODI5IDEuOTA5ODcgMTUuMzUzNiAxLjcwODEyIDE0LjU0NzRDMS40MzA2MiAxMy40Mzc0IDEuNDMwNjIgMTIuMjc2NCAxLjcwODEyIDExLjE2NjRDMS45MDk4NyAxMC4zNjAxIDIuNTM5MTIgOS43MzA4OCAzLjM0NTM3IDkuNTI5MTNDNC40NTUzNyA5LjI1MTYzIDUuNjE2MzcgOS4yNTE2MyA2LjcyNTYzIDkuNTI5MTNDNy41MzE4OCA5LjczMDg4IDguMTYxMTMgMTAuMzYwMSA4LjM2Mjg3IDExLjE2NjRDOC42NDAzOCAxMi4yNzY0IDguNjQwMzggMTMuNDM3NCA4LjM2Mjg3IDE0LjU0NzRDOC4xNjExMyAxNS4zNTM2IDcuNTMxODggMTUuOTgyOSA2LjcyNTYzIDE2LjE4NDZaTTExLjE2NjQgMTYuMTg0NkMxMi4yNzU2IDE2LjQ2MjEgMTMuNDM2NiAxNi40NjIxIDE0LjU0NjYgMTYuMTg0NkMxNS4zNTI5IDE1Ljk4MjkgMTUuOTgyMSAxNS4zNTM2IDE2LjE4MzkgMTQuNTQ3NEMxNi40NjE0IDEzLjQzNzQgMTYuNDYxNCAxMi4yNzY0IDE2LjE4MzkgMTEuMTY2NEMxNS45ODIxIDEwLjM2MDEgMTUuMzUyOSA5LjczMDg4IDE0LjU0NjYgOS41MjkxM0MxMy40Mzc0IDkuMjUxNjMgMTIuMjc2NCA5LjI1MTYzIDExLjE2NjQgOS41MjkxM0MxMC4zNjAxIDkuNzMwODggOS43MzA4OCAxMC4zNjAxIDkuNTI5MTMgMTEuMTY2NEM5LjI1MTYzIDEyLjI3NjQgOS4yNTE2MyAxMy40Mzc0IDkuNTI5MTMgMTQuNTQ3NEM5LjczMDg4IDE1LjM1MzYgMTAuMzYwMSAxNS45ODI5IDExLjE2NjQgMTYuMTg0NloiIGZpbGw9IndoaXRlIi8+CiAgICA8L21hc2s+CiAgICA8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgogICAgPC9nPgo8L3N2Zz4K"
                  />
                  <span style="color: white; font-size: 14px"
                    >Kategori<img
                      style="
                        position: absolute;
                        margin-top: 2px;
                        margin-left: 20px;
                      "
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSIjODU4NTg1Ii8+CiAgICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjUiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjciPgogICAgICAgIDxwYXRoIGQ9Ik05LjExNTU0IDEyQzguNjM4NTQgMTIgOC4yMDEyOSAxMS43ODEgNy45MTU1NCAxMS40TDUuMzk0MDQgNy45NDE3NUM1LjE1MDI5IDcuNjA3MjUgNS4yMjMwNCA3LjEzNzc1IDUuNTU4MjkgNi44OTRDNS44OTI3OSA2LjY1MDI1IDYuMzYyMjkgNi43MjM3NSA2LjYwNjA0IDcuMDU4MjVMOS4xMjE1NCAxMC41MDgyTDExLjM3NDUgNy4wODZDMTEuNjAzMyA2Ljc0MSAxMi4wNjgzIDYuNjQ1NzUgMTIuNDE0IDYuODc0NUMxMi43NTkgNy4xMDMyNSAxMi44NTM1IDcuNTY5IDEyLjYyNTUgNy45MTRMMTAuMzQxIDExLjM2NEMxMC4wMjkgMTEuNzgxOCA5LjU5MTc5IDEyIDkuMTE1NTQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMCkiPgogICAgICAgIDxyZWN0IHk9IjE4IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDE4KSIgZmlsbD0id2hpdGUiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  /></span>
                </button>
                <div class="dropdown-content">
                  <a href="/mart">mart</a>
                  <a href="/fashionMuslim">fashion muslim</a>
                  <a href="/fashionPria">fashion pria</a>
                  <a href="/fashionWanita">fashion wanita</a>
                  <a href="/ibuDanAnak">ibu & anak</a>
                  <a href="/elektronik">elektronik</a>
                  <a href="/hp">handphone & tablet</a>
                  <a href="/aksesoris">aksesoris</a>
                  <a href="/scincare">kesehatan & kecantikan</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="box">
                <div class="container-1">
                  <span class="icon"> </span>
                  <input
                    style="
                      width: 735px;
                      height: 39px;
                      margin-left: 27px;
                      display: flex;
                      border-radius: 8px;
                      border: 2px solid #ffffff;
                    "
                    type="search"
                    id="search"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <a
            class="btn btn-outline-light my-2 my-sm-0"
            style="
              margin-left: 100px;
              width: 90px;
              border-radius: 4px;
              border: 2px solid #ffffff;
              background-color: #198754;
              color: white;
              border-radius: 10px;
            "
            v-if="logout === null"
            href="/login"
          >
            Masuk</a
          >
          <a
            class="btn btn-outline-light my-2 my-sm-0"
            style="
              width: 90px;
              margin-left: 30px;
              border-radius: 4px;
              border: 2px solid white;
              background-color: white;
              color: #198754;
              border-radius: 10px;
            "
            v-if="logout === null"
            href="/register"
          >
            Daftar</a
          >
          <a
            class="btn btn-outline-danger my-2 my-sm-0"
            style="
              margin-left: 150px;
              width: 90px;
              border-radius: 4px;
              border: 2px solid white;
              background-color: white;
              color: #198754;
              border-radius: 10px;
            "
            v-if="logout !== null"
            @click="out"
            href="/"
          >
            Logout</a
          >
        </div>
      </div>
    </nav>

    <div
      style="
        padding-left: 75px;
        padding-right: 75px;
        margin: auto;
        paddin-top: 300px;
      "
      class="d-flex justify-content-center"
    >
      <router-view></router-view>
    </div>
    <footer>
      <div class="bawahan">
        <hr style="height: 10px; background-color: #00ff00" />
      </div>

      <div style="padding-left: 75px; padding-right: 75px">
        <div class="container">
          <div class="d-flex justify-content-end fixed-bottom">
            <a href="/care">
              <img
                class="cursehuman"
                src="https://www.static-src.com/siva/asset//07_2021/chat-button.png"
            /></a>
          </div>
        </div>
        <div class="bantu">
          <h6 class="judulfoot">BANTUAN</h6>
          <a id="budakbawahan" href="/">Pembayaran</a><br />
          <a id="budakbawahan" href="/">Pengiriman</a><br />
          <a id="budakbawahan" href="/">Status Pesanan</a><br />
          <a id="budakbawahan" href="/">Pengembalian Produk</a><br />
          <a id="budakbawahan" href="/">Jualjual Rewards</a><br />
          <a id="budakbawahan" href="/">Cara Berbelanja</a><br />
          <a id="budakbawahan" href="/">Hubungi Kami</a>
        </div>
        <div class="cscare">
          <h6 class="judulfoot">CUSTOMER CARE</h6>
          <a id="budakbawahan" href="/"> Buka 24 jam setaip hari</a><br />
          <a id="budakbawahan" href="/">
            <img
              width="20px"
              src="https://static.thenounproject.com/png/74745-200.png"
            />&ensp;0804 1 871 871</a
          ><br />
          <a id="budakbawahan" href="/"
            ><img width="20px" src="logoemail.png" />
            customer.care@jualjual.com</a
          ><br /><br />
          <a
            target="_blank"
            class="butuhbantu"
            href="https://www.blibli.com/faq/?param=https%3A%2F%2Fwww.blibli.com%2Flogin%3Fredirect%3D%2F"
          >
            Saya butuh bantuan </a
          ><br /><br />
          <h6 class="judulfoot">LAYANAN PENGADUAN KONSUMEN</h6>
          <a id="budakbawahan" href="/">Driektorat Jenderal Perlindungan</a
          ><br />
          <a id="budakbawahan" href="/">Konsumen dan Tertib Niaga</a><br />
          <a id="budakbawahan" href="/">Kementrian Perdagangan RI</a><br />
          <a id="budakbawahan" href="/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDEiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48bWFzayBpZD0iYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMTJhMTAgMTAgMCAxMTIwIDAgMTAgMTAgMCAwMS0yMCAwem0xLjgyIDBBOC4xOCA4LjE4IDAgMDAxMiAyMC4xOCA4LjE4IDguMTggMCAwMDIwLjE4IDEyIDguMTggOC4xOCAwIDAwMTIgMy44MiA4LjE4IDguMTggMCAwMDMuODIgMTJ6bS45IDBhNy4yNyA3LjI3IDAgMTExNC41NSAwIDcuMjcgNy4yNyAwIDAxLTE0LjU0IDB6bTEwLjA3IDQuNzVjLjUtLjAzIDEuNTQtLjc3IDEuNzktMS4zOC4yLS41LjI3LTEuMDYuMTYtMS4yNi0uMDgtLjE0LS4yMi0uMjItLjQtLjMxbC0uMTItLjA2Yy0uMTEtLjA3LTEuMy0uNzEtMS41NC0uOC0uMTgtLjA4LS41LS4yMS0uNzguMTYtLjE0LjItLjU1LjY1LS43My44NC0uMDUuMDYtLjA3LjA4LS4yMiAwYTQuODYgNC44NiAwIDAwLS4xNS0uMDhjLS4zMS0uMTUtLjg4LS40My0xLjU0LTEuMDRhNi40MyA2LjQzIDAgMDEtMS4xNC0xLjZ2LS4wMWwtLjA3LS4xM2MtLjA4LS4xNC0uMDYtLjE2IDAtLjIyLjE4LS4xOC42My0uNi44Mi0uNzQuMzgtLjI3LjI0LS42LjE2LS43OC0uMS0uMjQtLjgyLTEuNTItLjgyLTEuNTNsLS4wNy0uMTJjLS4xLS4xOC0uMTctLjMyLS4zMS0uNC0uMi0uMS0uNzYtLjAyLTEuMjYuMTktLjYuMjUtMS4zMyAxLjMtMS4zNSAxLjgtLjAyLjQ5LjAzIDEuMDMuOTQgMi43Ny4zOS43NS45NSAxLjQ4IDEuNjcgMi4xOC4wNS4wNSAxLjMzIDEuMTggMi4xOCAxLjYgMS41Ni44IDIuMTYuOTIgMi42Mi45MmguMTZ6IiBmaWxsPSIjZmZmIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM4NTg1ODUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2c+PC9zdmc+"
            />
            0853-1111-1010</a
          >
        </div>
        <div class="info">
          <h5 class="judulfoot">INFO JUALJUAL</h5>
          <a id="budakbawahan" href="/">Tentang Jualjual</a><br />
          <a id="budakbawahan" href="/">Blog Jualjual Friends</a><br />
          <a id="budakbawahan" href="/">Siaran Pers</a><br />
          <a id="budakbawahan" href="/">Kabar Terbaru</a><br />
          <a id="budakbawahan" href="/">Karir</a><br />
          <a id="budakbawahan" href="/">Ketentuan & Kebijakan Privasi</a><br />
          <a id="budakbawahan" href="/">Sahabat Ibu Pintar</a><br />
          <a id="budakbawahan" href="/">Sahabat Perjalananmu</a><br />
          <a id="budakbawahan" href="/">Sahabat Main</a><br />
        </div>
        <div class="collab">
          <h5 class="judulfoot">KERJASAMA DENGAN JUALJUAL</h5>
          <a id="budakbawahan" href="/">Afillate Program</a><br />
          <a id="budakbawahan" href="/">Jual di Jualjual</a><br />
          <a id="budakbawahan" href="/">Jualjual For Business</a><br />
          <a id="budakbawahan" href="/">Travel For Business</a><br /><br />
          <h5 class="judulfoot">JUALJUAL FAMILY</h5>
          <a id="budakbawahan" href="/"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAgCAMAAADHTHG4AAAAWlBMVEUAAAAAZNIAZNIAZNIAZNIAZNMAZNMAZNMAZNIAZNIAZNIAY9MAZNIAZNL+3QAAZNL+3QAAZNIAZNL/4gD+3QD+3QD+3QD+3QD+3QD+3QD+3QD+3QD+3QAAZNJsfX14AAAAHHRSTlMA59Muxqo6H4tIE2+bXuu3mH9TD944yHAiuINXiKGJ4QAAAspJREFUWMPNmNmWgjAMhru3YtncF/L+rzkmqVIdQRmdo/+FNSWQr0lsOYp3abfdb6qqWu0Pa/E1Om66XtVhKf5B3tZaTNGaoHKw7Vs4iivTAMgp/tvut/avJ6wFmOVB4ST9vH/T3dNq9yKVBgCV2QVi+XF/M0rFXC/my8F10Qr5GEuOVpC1f0u2xrG89nf9d1U3qMMrUNbASbUpT7EVzHOsGUhNoEFhhqK/9kftuxHtLkGiklJZx5YjK2q+pMIpUC1BzXH1QYG0pzgSztKiBgDXY7mUlhKSEFpdDAyy7sbUCFaEpIiWvbV0TPYlks6xKOTsguUl9/YcepU3WM0oVkVdT6s1IVhel2GLBsaSIENQWA4A26KbFdpQIINFMVdYilkdDlZ7HwDnfZ38MefLqhvVEakCPVVQjziyHHcIQODctWgTZyEoDTJr4RusOmXEcrpTMW3vzzV8WEXPVEk6USUuLyylkGmMIEnCcvewREs146fKgv0tfs2xtg+wNhzOXm3FUbCIiHrrTNnyvBrEUiFRiQVitQE1p+s5VvMAa8XByx6rzlJXIrCl7HGg8AiL5Wmx11pMwKKeN9lJllkc2PwFy/zGqsVnsegjcmNK7XWSEH8o4uJ9RSxK7q4CaDLT9JaPwy0/jgU6x2KQmucjDyhHeJomJm0QbnCDGMTiMNK0F6zU7R5HlZJnywX+EGPmP2E75cjeSIerlGQ5QI4BLBryg2XRvwamMjrolfvPnzx8eP9u2+zwqduWJkWGVd5ilWesyGky596xbGsDrLTORcJ6+qi2kGSp63srx5plWECjs0rRGRdqdPHRYrLY5luiOXlEbK3ef8KLjbMSQNbp/hlZ1vElGc7wKkUt5Vy8qHX35GtgUdxY/6vtyO7wSTVD/b4TH1XzlVRCHO5VcCk+rvXqlmorvkLHHKxqPl7APmOH/Qr/SNo0xzfU7wcp/LRALguNIgAAAABJRU5ErkJggg=="
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAyCAMAAAAN+PdDAAAAOVBMVEUAAADsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzYi0R6VAAAAE3RSTlMA/g0j0uuzWJSFdxffZzrCo0owPbajKQAAAsNJREFUWMPtVtly5CAMHIkbzOX//9iVZMzgZGprppLdJ/eDh0M0rQaUPG7cuHHjFSLYxz/EDmB+m1OpZ7sChB8TYsGl5wHK2e4kHy+xJdja+kf0aQO99ADAnR0NENdQp0Gwf3aEAEsyBvQpOQNsi/x9sLOAD+CuItNwRwV9ZQrMbEKmr3rD9KBNH7qW8D4UpwYM/Yy33I/I52PfMJ3FNV4X12TRHOIccxNjnxMcX2kqfbG/W/sqm0phMmHXbE9xgYxwuEGd9BzvRZjh33XBmk7x2pRBkIb523L1D3GRBhXHzIvaYB4SrnIDsT/58wZHXJ/W0kh+hjfxrMjmioUpL7NZ1F/g2mZ2usBlA2Nkrsj12gKyywQcN3CtBmKWFuGV2nwM403UlRyjMDgSNB8Ex/oGdpgmDx/N5QZaVqnoayVGn660cSWVcyhKxQcd5ZoIEtNrNcrVRgwiPNAgR6cpv8vedT+FZaYVMehZs0FJ2gQrhiUzpCpiSpwzb+pa6WwQMmHg9JI1mXb7Cr2fDysRq6Bzw2KnyVFAPGwobh7lCj3PFAqVJVo8YE9O/lZ52GmwblYhK9mxWFWkp8XYxlsZakUiEbejY++cqhzlZzWp/FU0XyMZ7XJ5LICjSCPKoo09knuRKn2Tpy2YSNE0S5hQFHW+MhWFUeHKm4rLgTY/L6fjRV2UsKpsiE5RMxzHfVJX+cozyy18K7Vp7zl6q7W2PrqCwm8oTBFN45yTYlM35lRs0QQPe0WPptqIV1ZUxUXf6gZbbSH3NRO75twWD6KYJ6RZa6/QdfwitvQcmqXczCE3vf4jLBCb8qnUBI5FSiRy4ypWLBDHpty/oNTBz0SRlCbMDodC9d0CwpT7HnAvawl6bQGscj+FPLKLBW5Y8ELu50AzHsG04Cr3p3BH6Tnf+CFX/eI/csZ0+SW5Oz5u3Lhx43/gD6f3F/25evpXAAAAAElFTkSuQmCC" /></a
          ><br />
          <a id="budakbawahan" href="/"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABLCAMAAAD3cHEvAAAAh1BMVEX///8AgNjvhh0Sidr0+vzd7/jwmD6w2PH88+clktv64sl1u+ii0e/vji3t9vuNxuvO5vVGo+Dzsm4xmN39+fP41rGCwen2zKBZrONksuT1xpW93vLxoE3G4/T66tXyqV06nd5Pp+H0wIn0un3ghytNgp2ghFzNhTgigb9fg497g3mwzdzEzMfULndCAAADCklEQVRYw+2Wi5KbMAxFJQQYBzBgIEBeJNm+2///vsp22E23bgen05m20zMJOML3gkSQgf/82xzzlpDkWMTwCPsWF6iCcCa8p00gjLjBb6EagrjgayjoGrb4PW2APkEfW1jNiCi3hK9ogi6AapU/XIMKGRlDcnHSUSR5UAkaNEzuz3QulLsoKYnadXUgtBQ2HZdUgzfUCr16nfW+CbsTyfIAxGAQbeidTO7lUOMLOaxCmamc6/cGFayDLrfSTa8MxNpOAIY4Z8W3BjUEICQrmm8MKECuRrQk9wZNwOnpue5HXPjw5YF2QPGzwac3GawkxxeKm8HH95Feff14x9kavH0fRdEJVlLgPa09O6MDVoRt3ryU7tObyFBmEIKSaHn7LrrRQxhHq3YndwmE8tmqFw4dBHO906cZPMCTRx/G1aMPYyiNfu7gYTaHqLzCL5F18BdR53m+3QNUvK8SDqhtcx45AByIARI+bB7W8dxU8Y+fwgnk7ZUmoWUxcA254ujy7iQTr0ErtoiJxEo0OEKLVIjRaBH5J5yNQYE4iYqw8RpwlLCWWJvx3rXxhqNIRLFCicSuk+s5ic9AViOSkjjlErcVti5KbDChKDA3Q9wDQyh8BgwVrgZTXOEZGGENBE4X3CPFiEdnUHhrUAgFbFAQCqNUtsO2wEIiOidIrKzc+nv018DANahQgiK8KBBGwcIRsTIGnMYR1JmP/9QgZplNiRDbmA1s2YyBkjaIwrscXcDQUg0VyRgKU42R8yCCmBpISIJ785IC1pHUytNw6wR+D9kOYNMDDBmPB9sO9NMJ7GADTL9jOjfTR1ee4JBCFnWsSM28cnftwZCmwAxPpX4yBrtoAz7mISvLrD/AzWBTdktjSp1i2WkNPna613rQ18WgS9OrtdDDVS8G9mDmX+hOqe57zZOcAdOn2qYy7MruxUDPfTqAD06gK0t4NsjA5rNL57kcnIH1m2eulQ/N0+f52aAvtdWl5tYcFgM77EpvGbPMfpnuZHPqXc4mYEenzmwyt/nPf/404l/7fAVTyycjJzwwZgAAAABJRU5ErkJggg=="
          /></a>
        </div>
        <div class="sosmed">
          <h5 class="judulfoot">IKUTI KAMI</h5>
          <a id="budakbawahan" href="/"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA/1BMVEUAAABFUIROWY9OWY9OWY9OWY9OWY82QnBOWY9OWY9OWY9OWY9OWY9OWY9OWY9OWY83Q3FOWY82QnA2QnBCToA2QnA2QnA2QnA2QnA2QnE3QnE3Q3E3Q3E3Q3FNWY////82QnDR0dEzQG719vlbZIfKys11fqjT0tI3Q3ExPm5EUILNztBjbJBia4xHUnz09Pfm5+7Ly85tdp91fJg4RHL39/fc3uZ0fafd4OfQ097V1dTHyMvAwce9vsWJjqRkbZ1VX4RIU3xBTHg8SHSkqbqPlrieorJ4gJ1eaJZCTYFKVX3t7vDDx9S0t7+tr7qQlrCAh6iBh59sdZ5YYo9MVn51q2qlAAAAHnRSTlMAA9k3/One3MGrlolsKxrzOUL79fPqw66Zi28sHERe6R0qAAABmElEQVQ4y22T13aCQBBAWUCx964hC4qAPYHYNbbY0sv/f0t2UYFB7wucmQuzZYaxQdFIkI3zfJwNRqKI8YK4kJ8Xz/D+EOdRYmGfCPCFY+48FxCvCHBOPsmKN2CT9vdOHhrcub71/+dBnTJ4tPjZW1WsdaAwfX/pVS1emw8W0y8aDSNawEe/792feBpLKkFSZ790L6QIClF1UHWEyXSqSJJSO5B4CDFRPxXqttCcL/6Wc5UIuCGK/igT4aEw12RdN6ggaw2RjzBBEQi9hbxu7TYSFTAxggwLhX5Hrk1U9SQQg2XiUBh29LY0vgjYzDC8W+i+bVbyYrt9vwhYg8JoZZKYiQ1bwLDEaE2jsv6tXoQ0XGTvc7fGS8P4sAXBu83hUm83VckukacH5d1FU7KFVMl71H0oCGVwWddCATnXDQV1diT5bMLVMF1KddSR2xNFUWaGRoQiclpu37KomXhVIxxpPldxN+0ByxQSPz+wkIBt39AwQLiDg+M1cgnP6EEjW6zcGt6GiSkpoZCwhxeOf0bDaSFfKjvpf6O5bmFqpYRNAAAAAElFTkSuQmCC"
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              style="margin-left: 5px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABJlBMVEUAAABamMxlotllotllotllotllotllotllotllotllotllotllotllotllotk6fKU6fKZlotlIibc6fKU6fKU6fKY7faY7faY7faY7faY7fac7fac8fac8fqhRkcE8fadlotk6fKX////R0dE4e6VjodnX19b5+fjT0tI9fqhioNZUk8RLi7pno9r8/f7M4PPJzdBIharz+Pysy+iix+iQvORvqNthn9W3xMtcj7D7/f74+vzq8vry9PbH3fGx0Oycw+eJuOKCsNpqpdp0qdioxdeWt9amv9XN0NLBytCRts2WsMBtnrx8o7vh7fjf7PfG3fHW4+zE2Oudwt9+sd+vytp2qdadu9W6x9K6xMurvMaZssFZlcCApLpxm7VolrNik7FSiaxLCxVPAAAAIHRSTlMAAtk3/PPp3sGrlolsKxr420L+6t/DrpmLbzo4LBv9ROZEJ6AAAAGkSURBVDjLbZPnWsIwFIaTtohAEdxMbUqrRWXvvTe49/b+b0IyCoHyPvwh35uekzYHLIBu2SHYJMkmOGQ3BOtA0WmXFIZkd4pryo5rS1lhy7XD5+K2YmFbXOa7grIBYXexn+ZWQ2T1zedbq5A+oGt1Vcc/hgviAqT/WMxcbL8M+l2l+0zOMi8CnWRbMxOj+/rJiBEZDV5nl/ifEwK3nazXy408fnh7GMEYyUkKG3Y3kCVSIaHGE62OrmfOIoTRN4rODUkGDtpZRlXVdCLbumfCF0LEcAD2DpppFVOpUWH4o1FDADaSx+oq5ZwKyZKGiGEDEi2RjfOCUUxpiBgnTFDyt3FemCBGlJVQ9FyaE5K/GhM8ZpP6Y3UpGB9RxPDiY1JyN2UmGMU/zRSOgMy61JXcNRWMt9Ii9/jZq85nG4lqnArvOGcchNjH6jzcVVRMrTjDJzQ5hubnLnxOx72n3nia0rh8P7C8MIW9eaLNQRw+yF25iyu0zmGYv7RWwxvkr73V8J7yg2M1DoOW0eONfV94w/CahufgOMAPLz/+hT2P98gfWsb/5VlxZjOccIkAAAAASUVORK5CYII="
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              style="margin-left: 5px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABAlBMVEUAAADJHxTSIhXIHhTSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXKHxSoFBGoFBGvFhKoFBGpFBGoFBGpFBGpFBGpFBGqFRGqFRGqFRGqFRHSIhWoFBH////R0dHSHxKnEQ7R09PMIBSyFxLPyciyPz388vHShYPTeXK9cnDcUkiqGRb3+PjV19fU1NTojIbZQTbRzs7Djo23TkvTMCT9+vn29vb66ObxvbnmurnisK/urKfHm5rSh4XmiYLPgYDQXlivMC7TJxvLHRGyFA/y6+vx5+fOw8LNv77Nvr7Gnp7Sn5vNkIzgaF+9VFK5NjHSOzCrIh+iexlzAAAAH3RSTlMAAjca+/Pp3tnYwauWiWwrQvPq39rZwq2Yi245NyxDv8HCJwAAAVlJREFUOMt1k+digjAURhMQQaZ722ALjtpWbevoto5q937/V5GECJFx/n6HS3JzL/CAhq5IAkKCpOgGBEEgp4oJREmIKhdQeC2J9khqPJtzMgohc36eTqEIUmnvezcPG7QGL6MYZHIOqKFYNIh/QM9/tAe9C+cUUN14+j2/cJifEJZT11AhMESSX95eNTGDoY0Zff4RQTSATvr39NB0uT4/JNhfLdJTHShugRsqDLCAef9d40QBEhHOjkl8d/88pEKnu8E1JCCwQq//M+vYVLDajiEAxAqPltWffOwEExthoTse7QRsBH8xGb/aXgXHyAQP+UIPSQUzH3vNtxURSrGNGvdNTDWu1bMVyXMN/7GWi57D4pQw+TcJZeg/93pjMbh5tsYOTKttBqlAd+TijCLvDW2kUah7Yx9pFA7YxQkbxXpo9VgjW+Ejl5cauXIN0iC8/pl8qdrw4y11eW2Bh2D3zgAAAABJRU5ErkJggg=="
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              style="margin-left: 5px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABJlBMVEUAAABiIqlsJ7NsJ7NlI6xlJKxsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NQGpZRGpdsJ7NaH6BQGpZQGpZQGpZQGpZQGpZQGpZQGpZQGpZRGpdRGpdsJ7NQGZZOF5VSHJdqJbLOzNDEsdtvRaX59/ymlL2MV8T+/v/T0tNcIKJxL7VnOaHz8PbR0NHLyM+kh8epl791T6j28/nj2+7TxeSymtGketCypcOET7uagriPc7N/WLJ5UK92TK1qPaZZJ5pXI5pVIpn6+P317/rdze7Jxc2snMKGTMB1NLjf1ey9nt3Arte/rNe+tsm+tci7sce1qMSMabWBW7SEY659WqtlLKhtQaVaHaJjNJ/Xyue7q8u1qcSVa79/RrmZgbh5VamBAUJnAAAAHnRSTlMAA9n8Kxrz6d7Bq5aJbDg22zlC/fv16t/DrpmLb0SvtGnUAAABt0lEQVQ4y4WTZ1vCMBCAO9kguCeX0lIELdM92csBgkz3//8TJiGWAlXfL22fe3u5JHecCS/5PYJDFB2Cxy/x3Dx8wOsSwwzR5Q3MKbLPGZ7B6ZOt8SV3eAH30jS+LIRtEJbN/1k8YsIMlkN2T8LNxj7mAvNxyFaRaf0++nF4Vq3oejmZUFU1/fo+UXxkLwEnjd/Hj040TXvMxmKx83QqQw1nACfw0vxn8bvrosIo5J5SXVqIl+ckF3lpVo+uEQBCioKQke3m0m8DYrgkzi+SBI3KSREA8pmH+tX4K1UvnNeMETZEP+ehK+zrmgLwfBxPJhLtfn+oxNQoOsCGhxNMAeWPy6c30Uu1PUZUAGwInGMqZOKnCq7iMnHFBGw4ONEUFE2/IYVG1azCBGz8I8DKn0tg1uyKbBlTIWizzVYOwBS2bA7KwC8lfFBEWN21OWryzKU7BcBsSLaXVcKX1QPCNv/bdX+WSHw9ZG2Yl6Su67Rhap0ejcMOb225wfAWE8UYBaBsyjNNGxmhH4ASDM21feQArAT3rIOzaGyGFkbPaqzvyHbDy4zVje3Qwnyz8Y+srAW3di3j/w3NFXZYkHBftQAAAABJRU5ErkJggg==" /></a
          ><br /><br />
          <h5 class="judulfoot">UNDUH APLIKASI KAMI</h5>
          <a id="budakbawahan" href="/"
            ><img
              src="data:image/png;base64,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"
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              style="margin-left: 5px"
              src="data:image/png;base64,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"
          /></a>
          <a id="budakbawahan" href="/"
            ><img
              style="margin-left: 5px"
              src="data:image/png;base64,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"
          /></a>
        </div>
      </div>
      <hr
        style="
          margin-top: 190px;
          height: 1.5px;
          margin-left: 50px;
          margin-right: 50px;
        "
      />
      <div style="margin-left: 50px; margin-right: 70px">
        <div class="cicilan">
          <h5>CICILAN 0%</h5>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAMAAAA54DrsAAAA0lBMVEX///+xsbHl5eWoqKi5ubnS0tJ+fn7tJiPKysqZmZn88O/23t7qHB7xSRz2eBr39vbtvsDxPiP3jBvaEhvZ2dngztOhoaGEhIRwcHD0pVb0cz7IPTXhLjXNICbzWxf4lxbSCxLt7e343M/BwcH5xb6NjY3HcHTxrmbmV1y7WFjbQkvYNTvnUDX5niX0ahi+ERf66efJqrX6yLD4saHlmZr2xZX3pYPffYDsd2uvOj3yYDf0gTCxBwuhAQXlrZ/91p7Hjo7bpXnWZmrzilHYYkHbgiUHm+oJAAABKklEQVQ4y+3RNXIDQRCF4eGZ1ZKWGSxZzMxm3/9KrtoTqFUO9SddHXzRQ88er603R3+Fy1oeN+v1PjWhdjsxpFPOrV1SphsYzep8WlruLBlcyjOMHjzZ/7aqKhm48z2MdjyZrQa/n7uZa3VgtJVLcxQEnVnlXlpAOjHMbIXeK9dKgXRZGLIffASJNT8vgbMuvPF2av68paYDHHZ0LYZDxzGnR8cYwujptijGuWFIKb0xjOr923VRTHKvrg86AtrTqN2yW+2vDCofz6ccIYJJ89gKIKnocRx2qdYlTGGG+d1SaVjElAqhGKMxD+P7qR9pQmg9EWEcYfFCe9i+23JFCI4Z4T5RBBGb2AgSY82huKsxiqCRkPmYR4JpBEpfcMgpVpqiDQVi9Owf+gMt/hj2bE5J8wAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAOVBMVEX///8oUo0JO5D5/P5NdZcKPXe6xdzs8fapuNDT3ut0krLF1eTa6/WPp8pTir/8+Pdtfbvr7OtSVouSiGo6AAABY0lEQVRIx+1SzXKDIQiUPwV/vqR9/4ftYpKDuXWmhx6yM46A7IJo+eCDf4AWNTHltzyvYw6PSPKOiEgTyLyc5wbjRG1YZhQpspPuCtzrQ7b3vlqZOzYOomSGMtn1VCnLGDDzIk6W+J5qjH0dzDmKNDWyDlZAZhgRmMT61WFuq8KAeTIxmDspMVaX6VIcqZcrc1+WYZw1583sJ7NBELRseDQwG5F5wIXBGgI5zIE1teRkDsjtqjSTCaHdYyxEnoMFyy/m6/ZWEzSURFu75mJQ0XHNIs8caNw6s541pxtTktnGxIQU1/xanO2R7iKNdoK9MeeQ6q6q7rUEBo1efXSwFPk9JNyzCcgn83xPmdJa/pt8z0GPa9pypj3ypfBUET6ZxSP66nUsH+GlXEYMmDbRPSv1/djwMO63f+v5Y6Oi6Vak64YLTnqKrIyAsvZ2QGRGjBHRBM5NNh4nLcZ8uXv74IM/wQ8VewssFjQXfwAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; padding: -15px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkBAMAAADBfo/zAAAAGFBMVEX/0gP///+zlBmRchspKCVkUhn7wArXrhLUkH7ZAAAAz0lEQVQ4y9WTPQ+CMBCGEQys+A8aCrKS0jqTXokrKYeuxIGZ1KB/XwkfLkLihndDk3vSN/fe5azDSvh/Sn1rIXbbou4Cdb/9vcUryk7MkrnWjM9MT1RQK2pF3ZdxoDBRN4goa7FQcWBaw2MvaAICph2obQRjJJeKiTyrEGkFOQDWI72nTBNQQispJe5LhAyUHJU9Imj6kLxDfcaMhzx9U8jnrkyYetfOZtUlTKLSqVihdUcmR0dncsTrtWk8t7Xfus9+h3N+6OTD/UF5o1f2AlyOQi+Ga168AAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAMAAAClZq98AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAF0UExURUdwTBdWgxdXgS0tABZWggAm/wCAjxdXgh9YixBYjhpXgRlagBFViBZXghhYfBdXgRdXgxdWghZXghhYgxhXghdXghlXhBdXgxdWghZXgRVZghdXghdXghZXgxdUgRdXgRhYgBdXghZXgxZXghVYhRNWfhdXgxVWgxhWghdXghdXghdXghdYg+W8ORZXghdXgRdXgRhXghdXghdXghdUghZXghdXghdXghhWgRZWguG/MyByniFyntHRMNO3PtG1P5OMZrmlUxdXgxxZhhZYgxZYghdYhBdXgxdXghVTghdXghdYgxdVghdZhCmd0Smf1iaWwyeItimFuObEJiWEtR9okyWCryqSwbSgVcywRCR8px5fhyZ7qR9mkR9mkSBchx5kkSFyn1Fre7ynUqWZYYuHaoaDbR9kkGJxeI2JaSJdhSRbg46JarqmUyJchVlueRdWgllteFhteaSXYKKVYaibX4uIa6KWYhpWghdWgRhYgxdXgvDkdHcAAAB8dFJOUwAyPgFGAQI3CAMTGw9ECkl7Tbg1Sosd94VQJI20UhVCIFd9ORgNcy8nwfvJzgasgZlhXe4hoW+dKi0qt2UDWZAUmKl2aWffp7wQltli0o8lIs0ZZFl7uTFmeIYzX46evWbAs6iRlWXGlbilVGxyiKmSdW6YcWGeuztZgrMXOJ+kAAABwElEQVQYGaXAVVvbUAAG4C/JSc5J2sYaaZu6uwotroNQmLu7C3Phz489u+FizS548U8tAf/TWr2ygmDrX5+sLSKA7Lx5+erpu7VFzCXdfvTi9ce3nzdWW5hLvrv88P2HZ182bq1grhvXl+5vffr2/WYL8128unzvwePn6wggnr+0dO2OjEDihcsCziATxWnaBCeG3SyAkBcq9/BHbBunHaVwolCP+jISZqK2wEoA8rHxOBze2aIglk7gGaGUDOoeN5NOtTYxD83DPpA3edsuUZIstW1Sc+zePgFoXZ/OjjiXJpvTX4MsOtsoJkPjfMMZUXT52CwGgA6G8BoFl5oxVN0MOjoqu3mdHTsjii5v6+0oQOsHSmOBc6lZU3YGCZTb+qaV2y3vOfscvB8dUtj0wc3MZnNScemosXdOF+H73BDSNKGwNENaVVQ4DLKiVn3Zq1fCaiiLIKo9ZvirSBkkFEsQJQhMBlMUUWZQ04ITBkQAqgrFyJA4389oVo4zclRL87xhpThywH72LC1CUoRkwbi4xkUsLU6jfI6PGCqhUVrQSNyvEo2P9w06dQCIAGRBACBCEiEBECVAACAlipIA/AbieDnzgcMSQgAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAbFBMVEX///8UZYPlSAvs8fbj5OTF1eTa6/X96+h0krJNdZe4t7n2wLzxiVKpyuL5saj4o38KPXeqq6v63NrQ0NCPp8r5yMjT3uuyzcnuXhapuNDc3NygoJ+u2vDEw8SQkJCYw+FtfbvxeCXeMBD3npRPtWHXAAABgUlEQVRIx+2S2XKEIBBFu0EFBBVEXGbL9v//mG7IZExVfMtTak4p0i3HW5TAkyd/g7U2wWgzCkAuHbHMQMzdAgT3Fq66ei8qIYSDQWR6amjMaJrWiBMw2k+52n4112FMihoXNAAL+o6yEPECwFJDI9K4g6U3sO+r+nApr2ITJq+LaY5NcEKMSgz0EOnbNCXzFVEfmkqtwoG1eZ/FrGtNApu6QewOTLWqUQgL6mFmzCWbMCHKA5MC+/c3gOGR2TSzRl9nEwyaA5PXO6cA3LdZfsRrMSXiNB+YwkJaHaW68WFu3hQTOo/dkTkAbdVZlcZ9ps5mORu/m2saHCT6wCr6+0moJ8QaoJhg/Jcpf5rWcWpy99PnkfBmLvFMk9NmxAX2jGroe0vPvh9G3uD2sr3w2ebkqaRIM+dqgz9BhlhVsZJVdaqqK92EhKuk3o6WXxNyb7btma8Qrq2ksb2FGKG9Bm4yt3OMMpxDDG24VT9CM5WUILmI90nmFPlFLuHE0yf/kE/0thOnGG0U5gAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiBAMAAAD8ENftAAAALVBMVEX///95qs/r8fYRYas5ebWoyeG6xdyavNpjmcTb6fPT3uvF1OMEUJxTir+Vr9UlfJ6qAAABOklEQVQoz2IYBWhgaml4aTUuSU6XyybGlzfgkGW05D49haMBl6wR5zEWjYaHogyJCzZueCrNWKAoOFtQKBEmq+vly9FgIhxk7PDGyNewecGaFsMTFjJQWSsXXU+OBpfHS81PFZt7GB9jWCx78aijMFTWzFBZgKPBuWWF+fHYELDslcYjp2GyloulDTkabDdf8bUNYTlh6KKwOPDsSUMZmL2AsZ5aXNFwxTeEIUWW1dFdpWGKy3MniScwWa5T3MYNSgpMDExMDAoKTApMSgwKQCYYsBqGmGYLP8AVWImCgoLiuCSZUOkJqFz28m1ZUbOXzVQtS9u2e9tKqdCVaWorQ6eJQWTZ4t6li8eJRas9DCutEwsILFv6NLwyte45zAwlpqmTFBQ4mRTYixQUJk3QVJikwKCkxDAKUAEA8DVadpU4bbAAAAAASUVORK5CYII="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAARVBMVEX///9ssXQRj0GmzqP5/P6IeZ3s8faOkbLM4cnr7OuhosJwZ58ynj/79/e6xdyyzcna6/Xj5OTF1eSpuNDQ0NCqq6tSVouPzHeqAAABBklEQVQ4y83VW27DIBAF0LHnaTB+JG33v9ROUFS3fMRMFUU5P0YIdK+RZeBJqHPVO2nbyOTof53FEE3iuSQTzqMbUCSYO+HwAwVCbDzMU6Sz1NQDRjrj+AdClza2QqTuzjY2pLuz4dDACXphm2vdnQ2rmv6JlQW+DXI1fS3koFv5lXsfnp1VO4uzM4IYwmp2R2xI7XzPjXQu64r1rIYPXAViSgFqTjhyVmIukHn2v4r/eaVrFTPoduFdmQmysk+kqyYfqWbRhy18S+Ytp/S1AGRWYM3AkFiviVkfdmbWiy6JfeHue2+Ji2ry2U11ySdvJlCIgJwPQaj4Y7/toNLse4d78JV36De+tggFdNykrwAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAQlBMVEX////Mqqi7hYT63Np1DQ7FmJb8+PevYWP5/P6dRlDo0dnetLeZHy/96+jct9Ls8fb1nKDwIiTXFRjn2sPOvLjyU1SuNuHTAAAA00lEQVRIx+2Oy27FMAhEB2zA4Edu0vb/f7Ukq2bZLrq4yjGyPEhHYzw8PPwPGuUCv4bqhf/FFBE7TXIPWcSAUHfrKIJCS8EdSiwKorvJQHPX4h+hRlxjVmaT2sJWMG3FBLJmaWDT+29fr9eXQyxTmm42WMYwBFlPk4iR7RxTuN/Mse/78Ba+lZYmpZidVDUo60gzdNEWnY3lZh7HMaqj8Ridu9DnEqYxGNFB0lWwWTGx5Yq7eZHbVkrTPEBecza0nIyKHC3zfLQfppaLDef64eF9+QYXXgbr0oYukgAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAbFBMVEX///8KPXf5/P5NdZcoUo26xdzt8vfwIiT8+Pfa6/X2wLx0krLycHGPp8oPJ1fT3uv96+jj5OTF1eTyU1SpuNBTir9tfbv1iIjeMBD7AQH63Nr5saipyuKYw+Gyzcnc3Nz1nKAJO5BSVovUS0TNwZewAAABS0lEQVRIx+2S6ZaDIAyFIUQUELUutXab7f3fcW5Jp/PLg/NvzmmvSwTzcSVRvfQUIhxQlZRG9AfUHt/roSyH+tRVmKBtHE5fl4cSut1qX211pK4GMMz+ePTzAHqmjWhXL2LUtkrZ0wDbjrKFIYBfyzKjMs5oIwsdlrpqL2+0DgranXza2bXRU3pTee9pNOO6pdSQiJyzeDjrxiiCrMOoCIVak70YZo5OOeY9Ra31h2YOqmeeFHiiNdDoJC5ajQ0GLdqrAkPp1TrIxhjWhbul9nFCiLEgIdc1AuyxbntVTkzODQxJZUlY9vJBQv4SedIIR6jQDxkQNpHS04dnow0h5shJsxNU7ZJn8iLKkyMcLKJtH2SziZSuhBjQFSEJbdWYsDmSHCOzwRWFrChNcK5CyHSBYbsvaHdP7QPzZ8yTEFn5ORHuE5AMX/r/+gYBDAxyPoRSkQAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAaVBMVEX////8si7xeCX5saj71Jpwlpr+78ypuNDs8fZNdZfk5eWUqa38+Pf+9eT7zXFDYWP5qBDPz8+yzcn97aMKPXf+0Cz6lyXuXhbc3Nz+1kn96+j83beOkbL4o3/6vkz2wLyBgIHxiVIpKCWbdBZ7AAAA2UlEQVRIx+3O246DIBCA4UEdZjgIBa1aa/f0/g+5YBqzsZsa75rUnwsI4QPg6Og9G0s52jRLu1de+6L4vn3K86Wp98u+7wuRcnIPHm/lXDV3tXVVrqqWNu6tK9cVf+vEvZOEjWwtnRDdluRh4P9ebtzlLMQiT2msJLXGM6wwLzhp95Fhai29bSMioUFAFT0qJJpwQB8BbMYNWFkl/ijBEyIqUGyUaaOnvCYzmfu35/NJS/fw2zb8TPl0+FLGZ4lBRYMGnsdE2oagNWiIgYMeWDNp1mnn6OjF+gWVigu+PCsnBwAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAWlBMVEX////5/P77AQHt8ve4t7nycHGBgIHc3NxQUFCQkJDwIiQDBATQ0NDj5OQpKCVxbG7GxcX5yMigoJ/63Nr8+Pf1iIiqq6vr7Ov+7ufyU1T2wLz1nKD71Jr4o3932pulAAABPklEQVRIx+1S2W6EMAy0iXOfhGvZtv//mzVQFTWrrvrQl5UYkIUHTya2DBcuvDbwGYPfKT4U4vEe/45wypv8mWFzPI6/14qaC2qlYsmq6pKrJWZJqTnslf0kd7yJB5eQmDE5ehKKgqfFVLCpRDKbzbC+u47xIaWABtqwMivtK8SifQBrit98qwYYnBt7lkqQ3YStMgmxZMU+SqD2MxmqPm59IAs7Jziyn2T52CqtYhXAnIzQ3qoUVFqOkUxd524AckCQ22fTpxFCZBUj3zvvt/XW62OWo2RP1rsBJIeHPgVyn6Q4moWVsw+JEwwRYFzdjY279SZd/7NPxJoiRJMpWWsC+UrGQjHGKgKGmKZ9tqu8QwNRKGCkoqHYCIGI9MbOVh97NfY77gOOf15kbDcYm6KTwZM6q7/I/blw4V/wCQAmDJvqAT2hAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAXVBMVEX///9NdZcKPXcoUo3F1eR0krKpuND7wAr5qBD79/fs8fbT3uva6/X+78yPp8r7zXH/0gP+9eT8si797aMPJ1f+0Cz+1km6xdz954b6vkxTir9tfbv83bdSVov71JoPnwK9AAABFElEQVQ4y+2Qy26EMAxFbcdOJm8GGJhn//8z6wxqN9UMtKsuuKDoyvLJkQJ79vwxPn+1PORfkbl23Sk/2+Xg3Lm1+/m4BT27ruvcSe31cFC2u+sdzp3W4aF3TrW1TlOvaD8NQyvKDutS19Y8wLGhlwyL39V1LUzOVQ/RAuS+/1hmx0vN2564CYSCIv576OFnEsQIiQOEyEmPoCcEjkIphvT8XloMGtLfeNHGtvXZGw0xWUQSI29YQAqWZvDRoKWik0KsQx4t0hzo+pq1IAbiaK1BZUelzI0AZPECkLxlHxCp6A6ibcaHUGrsuLBX/5Iti7cQCpnFy4RIG7zCMBcIyIxiJWICK8CIfEvIpeiChT17/nk+AQ62C6pkyuQwAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAMAAAA54DrsAAAAdVBMVEX////+/vXw9PjEzNqXoK6mrr+zvMzR2OJlcIN9iqPj6e9/ipja3+Ps7PPZ4O2/yNDv+/2RoLmwt8GfprfO0M+frrj65Xn758P4ywfn8///8ftLVntMV2n588n/+lrsgynJsST/99yCkLf57p6AUXHo3ku8TDZK3QhMAAABYElEQVQ4y+2SR3LDMAxFAQLs6s29pN7/iCE9UhDZi2yyyviR4oBfHwI5Ajz5vyDu05JGXjPrABcBxSFv1irCt11y0hTEKMkPxjnGm/iz4vI0OSnNuYbYUb4oKfLl07Q5rerDL8hVNtvLx5Qqj9pgQcCV7XqrB8WgNFo7aBqqGrivmw561hV0cpdp+349A8TX2GgH0RFFTwjH2jhkrxyrNskx0rHp2brd0cJMA+fr53YCZk/sqDIHOx40NK3rffCH0DN4V7VctY6MBq99lFO/vE2XLcS29akQ70bjdaQds/G+0lGzJu2dJU2ujYY5uEJy9/vNBrDEHKvbmoM0FUKpsqRUCXmfxTRmFidVQxHKNOxQFiEUQdVlWSRCUa7+0KqDMG+oNsbo0VpLHZnRUOhqYw1R3dlwcy3OO3Ddv2rVlw9W8Ur3rEdCcuWceF9TxMd6SwrK+WQroDhFFxCePPlrvgD4KgzBao5eIgAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAMAAAA54DrsAAAAbFBMVEX////+0CxxbG75+/1QUFDP0NC3trigoJ+qq6vi4+TY2drxeCaQj5CBgIH4kx3s8vf+7szFxMX+1UlDYWPxhVP+5YX7zXH7nTT8si7r7Ov+8OX97aS7hYT/0AT5yMiUqa371Jr4o3/CqWLIgTHLcq9jAAABMElEQVQ4y+2Ty47DIAxFXWxsQyGEJn3Pe/7/H8eg2baim656pMRsjq4vSuDFixFw7tjBNwqMM79vjBNCoIWIEoyz3zSmL5REzjmK4/vueuh09CKOTJVHQ6fpR1qsMdr20s2TqeunaI/VQfXa1eM0bbdvFruYupzH1N70emjqKin2WB4y5x6Ks5kWq6itbcbh690DHpv6GwBdW9kPfw6zHZq6AoAQ0TJyyYedcWj7fazr98VmsH2dG4hFeDZYeizC/8A+0EbB+/tU9tVeIBFC8MCYYnAh5xzV5QByp676oqBakmCMLBFcFvLEIRDnGijfVpkrF+aYqsaQUoD+w7mcPFViyRTvpKJyypyKcFBUcF5dS42kxJSJb9b1XD2XYg/6EMGjIshZJPmaU5RYFV48yh+T6Q28eQw8agAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAulBMVEUAAACohzexkTeDYzKHaDG/n02lhTe0kzqWdjWykjuEaDuPbzV9XTOwjziScjWpiTeykjiGZjPAn0OqiTd+YTapiDqujTitjjivjziigjehgTeSdDvRr1mggTeBYTOIaTWPdEKKbTV/YDOffzeQcDXevGCQcjWxkTizlFG+nEbWtFfDo1Xdw33auV/Ap27Mrl6/o13n1ajIr3PZvHLStmu4m1GukU7279yvmGXPrlLkzZXRuHmfhU3q3r/75NRPAAAALHRSTlMAPVceEiGEaGUuK+jVkHt0Rzv8zMS9qfvr5du6tLCAUP3epZ+aj4jZwJfczl/WIXQAAAEnSURBVCjPpYvXcoMwEEUlgZBE7724x05EMQZc8/+/FUhm8uTM4MmZvbv34Sz4C7LF4AUku0zxC3pgl/VenqvvFkPNuyF58iAK4rSE6QjjjGAtuDQ159XClYH4a/7UXF0JlquuVFeW3SJXVXXlB33T32/3qhr2LLcm8zt0qhtF0TdLJVGWSaFslNyyDrbd1fzzfDzxrk7XOx0Wug53OtUpFcDaW8eR5HgxjbMoiyAA27Lkp9t58svruw+hRI2MSpYkOQYAmodCBzreGyNhSDzH9w8ffVW1x2PbVHZINEIkzfANA2uSoTEATRExYJpIBCbCGBGCYLK4tLzrL0OEAEQIj4FMhAwzBp4hu4+Wn5rHkoJ5yFlTXoO4AHPBaXl9M8F88DYd9f/zBR5NHC8HpA92AAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiBAMAAAAT0rzTAAAAJ1BMVEX////wIiTyU1T1iIj8+Pf5yMj5saj63Nr96+jycHH2wLz7AQH1nKCnW8XgAAAAtElEQVQ4y2MYBYMTsISG4JOuFBQMwKNZUVFQgqG1gSOkvYAjgqHE3Z09oLUBLs0sZBG4k11IIlB0knCgMIvwwsREBSVxuLSTsKKXoKPBZGUGrWkzGViksxMNA9R14NKOQoLugt4JxqoMyjpqDCzKgoltoooqcGlOSc2mTZzKEobmyprWZiwKgolVqqpITjM2UxRlSQ5ws4hJ8TJlWRBWVrxgCZLTixQFDfD429XSlGEU0AsAAE9YIKwtdnJMAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAV1BMVEX////a6/Uvk87XFRjI5vUGeMD1iIipyuKu2vCYw+H1nKDs8fZws9363Nr2wLzUS0RLu+b5yMj96+jycHE0pt5Qp9f5sajUFznn6e1Tir+Ewd+6xdzyU1R7o0GRAAAAyUlEQVQ4y+2QWW4DIRBEu5uGZl+G8Yyd5P7nDDiSI88J/MFDKkRJTyUBi8XiI0BkixhgM96nV+twpjjnwquzcnUZomZAyMr3E1IDSFuCx3eCBkRMFZADYGDYH8Dh3eVKEafbjDJnOY0qyquZfdeRxBJpq0nHSpXeXYyjl+mWcuTeh5WVmaeXnbiSrTct2tG49BdcdiP/7W4AP2Va6ekeZrhC9DS10C2Su+4yI8+/8uORjuyb3442MrVsnQiiWHd3dzsAQVgsFv/8Ant3CE+H3LIdAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAnFBMVEX///+4t7n5/P7t8vfj5OTQ0NBQUFDc3NxxbG6qq6uQkJApKCXr7OvFwsOgoJ/8+PeBgIFQqTP96+imzqMUZYOZHy/M4cnJyMjO4vDF1eSpuNB4qc/MqqivYWMRj0HXFRiu2vD+9eT63Nphm8fn2sMGeMA2eLV0krIVqZ9NdZfFmJZssXTycHGhjFTyU1SdRlDUS0Qynj/UFzmRcht4ASEbAAABEUlEQVQ4y+1T2W7EIAyMweaGwCbZ++h93/3/f6v3pZU2K7WK+rTK8MAIz8gwFtWIEf8AUU0YQ92b7uVtMrDvutt19TDr2bz7eGqmA7yLu5vVZrfeFhvE35r9kHl73T50cVvKVV/z28mibZevzftnUx8oI+ERtwSt93TPhFi2q4umPPfSUkFJKSTykrjfCQRKrbQKkoGoAorL++qxTOvDK5mgTMomO5+Ucynm7GxiJxiIlhzwDpW4nRTbHxKXvM0maI+eFEudBctMc8FpkMk4foSYlvN+EAqlB5ZqT956MzPJKetBYTaUo9VOpVRVddMcmQUEjgNj4HSAZgSEEYH0jDSSJkSKMrIu1NWIEaeE73/0BalZDUK0AzQSAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAMAAAA54DrsAAAAVFBMVEX///+2ubXCw8HR0tGusK329PPKzMrr7Ovd3t1ls9zxkZ2MxuSEweJLptWk0uni5OI8ndP0tL3xoKqZnZhxud7219opk8+kpqOz2u384+UJg8bQ6PHKToeSAAAAoElEQVQ4y+2QSQ7DIBAEmRUwYBMv8ZL//zM4yyG+xcotlDiMWl0jNKZS+W/kvGr19GYCp0aoTPiOQgjxNi4pLWvTXEqje+Z62DNTN4AjZTdzV1oMxnu/+RxzuPb9pZnYCoEFhcF+qo4REAEIQAGGMooffdpyTO1LNbLnhHBQkVVJFR2Wx0yEEuPYhiLmdto/DKx7bmeWb04s66NRqVR+wx22/gXNF7bEfgAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAY1BMVEX////5/P54qc+Ewd9hm8fs8fapyuLa6/Uynj+u2vASYauYw+GmzqPF1eQGeMBTir/8+PfI5vU2eLXr7OvT3uvM4cmyzclws91ssXRLu+b18/d0krJNdZe6xdzQ0NCpuNAvk86oEP1uAAABiUlEQVQ4y+2UyXLbMAyGid0UN+22k3R5/6csWLfTQ+RD1EsO+TWCfg31ERhCZPjS5xQEOEvB6ZT/ISgRAD4+rw8aIVp4wor+nReCGxFw093kxhRdAk8ycGQlA4NRDIJECuaQmDUJMvMVfXDLcsyS2l17Ze01JW6EzNo81JdQhtoUJOe8HNZskQlDQp5I8M0KJayJSG0WZ4eh4r7tT1heldlYuRAgK2GjSqqoswDg0GneFzggYZyIpHyLpGWFKERFE0UDJfXvl53rb1oOWgAiAbrt1yM84hg6esnbd5ydpoP+0Z01SRihM1aCuz8j4rm2y+W2hanVAd9XbK/BEJFAcSqkDfRqmiZSueLPzrpyIqr6Pm30WgSVIhEiemTmOc04+0sVgHzpuv2IcNAglukNPRU7G0tCRmpWEVltfoEA+4POy8FaEXNMpsrItApPyJEtMa7MTWBFJMq3Dh/97CZ9fUfoRY1uod8Cbt2V+xXVk9+c/ahgjdIfkpfzu/7cmQPnyH/86QPyS2f1C57yDrfO8qc/AAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAAAyVBMVEX////4+PmFhYf8+/2urq96enypqav29fTt7e785+jg4OD81NWlpad2dnj88fH74OD52tvW19e6uryJiYt/f4LzQEj+6uv+5OX+3N3Oz9H8zM74trmgoKFoaGrxMTny8vPBwcL6v8JtbW5gYGLzXWJdXV/q6evm5ub94OKQkJD2gYdzc3Nvb3H0KzPwGiH5+fv76unY2tz80NPJysz7uL33n6P1i45XV1nyS1H1RE3i4uK0tLb4ra70lpmVlZhlZWfuIijtDRfxc3dvaBk7AAABVElEQVQ4y+2QV24CUQxF/eoUpvdheqPX0BNasv9FBRHIJ/wnHNmyZOnI1oUXfwm91WpfSwKBXDfZMyOduIcoWqeTrZbHphVaHzx8rLx91r7mBUbhjnVLwceSOqryWGm7kuf5XtDau/qcUqrMrTwnj5UVzDTtMHZXAwMIgBwTeEJr1S6WRXo+12sDOqbQpZkodyAzRSS+d0VZFGVA5k/fCAb1ZFLrPakXBeHJ6YdDXrEqxCzhTclOrHGaD0VNOGYsvD/2td9uC0/rkUGwaDBdJMoQjailNHjTidVsYyp4wUcOU/vze2JpZEiS5wuFq7/z40ZJYgyqXeUJriB2UCVzNaE2tnhp/4a8Wxr+bLYcj3VzxJxcpX2C4xKX9hC4LYxkal9O2H02tG6Kv0t36ygauGmtQdYlgAgCBII4FS5zCgIQMu0gBF0R7miSHxhGT5IEePGv+AbRmyGtFEnb4wAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAATlBMVEX///8KPXfyU1TwIiR0krIoUo0PJ1dNdZf1iIj63Nr7AQH5sajT3uuPp8r5yMjs8fbycHHa6/W6xdypuNDF1eT96+htfbv1nKD2wLxTir+t+yNMAAAA/UlEQVQ4y+2TzY6DMAyEPYntBAolUFq67/+ia6fLAe0hqlbbEyMUWcifZpwfOnXqX5Uzlec9Xim8z4ZAMV/7S9f/gY1UNe2ra5jfYW9ItjLYeAZUVqIZIgJZWuyoziY11to5KRYaAGYG1hZbfR9gSyA1QaJB4ZWOv9hCIXf95X7wNfZRe2eF+9Z/x9DPEGLcvxDy7svK1nvzTQMm8xUBEh3UlRxjjqH0ocSSN/fdMyfd2de80si8+34pv/ba8/7Mu0BaZ6RYaRCM1muVuSfnndUWOwEqUEw+NATA7L4pJYCb94pFhOeaIXlV74ZrpAb7sbewbZQ7Ch0VOnXK9A3xGwqYE5bBnwAAAABJRU5ErkJggg=="
          /></a>
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
      <div>
        <div class="metode">
          <h5>METODE PEMBAYARAN</h5>
          <a href="/"
            ><img
              style="height: 25.6402px; width: 48px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/akulaku-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/alfamart-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/amex-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/oneklik-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/bniva-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//08_2021/ceria-bri-logo.jpg"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//11_2021/logobri.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/cimb-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/dana-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/indomaret-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/jcb-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/jeniuspay-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/klikbca-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/klikpay-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/kredivo-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/linkaja-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/mastercard-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/ovo-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/paylater-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/pospay-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/gopay-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/qris-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/visa-footer.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/asset//12_2020/vospay-footer.png"
          /></a>
        </div>
      </div>
      <div style="margin-left: 50px; margin-right: 70px">
        <div class="keamanan">
          <h5>KEAMANAN BERBELANJA</h5>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAQlBMVEX////8si7wIiT7zXH+78z7AQH8+PfyU1T6vkz5qBD1iIj71JrycHH96+j63Nr83bf1nKD+9eT5yMj5saj2wLz5wJId4lQ+AAABlUlEQVQ4y2IYBaMAQNgYpFYQgDBUAhoQFdG5/1krhRY6f1HBRXy8+N84p8j8iZO/pIiw32TsDxfaocj1EmsvDUkfyacMCmS32dZkl/qnCwd4qw+AVSSAcaWjJAMXFIvj+1YLJBBWraGdrUMmI64pDue1HAlk6LzdRcCx8f1X3TUVgJOm5xpxRy2EHHm7wUBhkceumzinyuACiDmSiOujEFkvlxEc1EkIglR3JUtHWoFWahBChXL972fbmqmV9Wcf7ywfW29rE7ls3U89j1jvTo6856sdMkrNIAaBsMMMovggPvT+V63ZpZSf3Ru0QiYx40eGzNh7+a/h7xME9Go0wB8U/TahLJrYtiK19UoPaw2wVOVrVLb4xOu8ikBXghG2khWBYs7hkwYgOyMf8CBr+VjOF5wsUBAZNFue0didKfAZOoIA7vdbufmufjPYLgZXcF090Dmuj4G7vrisCu5OSIEBA0IQO+L+iQJZA5xcsMg4rAMLrnQirwOVgOoztVf0yU1z0sRp1d1v0/dPSpp7ZOy//kB9AxlmEqK2YhciAAAAAElFTkSuQmCC"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAP1BMVEX///8zRKgEGZePp8r6/P5tfbtUbbjs8fbT3uupyuLa6/XF1eS6xdz+78z7zXHIgTH5qBD+9eSOkbJGOob6vkxJegouAAABcElEQVQ4y+2R2U4lMQxEXeV4yTLALP//reN0Sxeky4V+4gVKiWM7Oq60Wn70PdRix7jVUWu+rVd7yDrqTiucCqwkXmtRxkPWmDJot2doM47U1/saMx+wyl57KHyEDUtbgKpKHUPCARfBA3ZSG1ShsEmYYeHIoY6kG1UCfcmSvLMPmkIAhytGgwt6UHeDhhAUhkogfscWBpX9zOkuDdYwkp2u2h0yCjcTNCx/74MZAl/WYTKoCemcwFI1GiCCuhJnv2cT1eyA7yQxl1cVuRsTUBMxYJ6/8U7tCO1M2m3F2W3nYRjygX6VNpSzZRaUfeUuc1Mz5EP26eXlScSIScQASDTpRMXP9ef5nwSondgjzF3ESY4LrPJ5+zQtFiywSQBgv8Am//62Ys5NFGM0p15gGzi3i9MkDMQKMpQuF2QE0QSHU5KuxJ5xhU2Suu2XWtfKnaVrrIA4JgwcTJB9JJhXWNUuMlRbGVuPWdlupvzo6/UfmJAJavcmAlIAAAAASUVORK5CYII="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAZlBMVEX///8DBATXFRj5/P6goJ+qq6vs8fa4t7lxbG4pKCWQkJDj5OTycHGBgIHEw8T1iIjUFzn8+PdQUFDQ0NC7hYTyU1T3wr/18/f63Nr5sajk1drr7OvMqqjUS0TwIiT96+jetLf1nKCr4mEGAAABSElEQVRIx+2R3XKDIBCF1V1YRAEJakza9Of9X7K72KnJjExzkUuPIDvKN2cPVIcOvVDa+u63hIcfsC276swY3IrCsiyfz1vi+0czulzGoWn6Stks1PKJuFJPkA2T51O9SvqAlov2rRDTjaPt/shJ35OYK1cwvY7jF5/CHC4g3QKTrTPG6NWybAo9O0UI0imTk+xuSSnFJAnGs5CUySHOTVb23Lo1QvE87XtOTMI3Q7deyLucUezP8tJFz0qavUbpdsuZm3WA/LalnEOOGS7imXMqls73Y8nWYvp/zmnLmepNvpQzxlvDy/CQ09W5byena/Y858A3WcXQh+USwgzWrNLIaeU+yBjnYIfsOgDQmmfqIOXyDFmdlrE+e56ISqEiJG89JUKRQiRFxKsM2bADau8RvfxOymsk9F55Ih7XJKxKXKOtDh160A9+dRAB0ykCdgAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAY1BMVEX////s8fbj5OT7wArc3NzQ0NBQUFC4t7kpKCVxbG78+PeBgIHFxMX+78yQkJCgoJ/97aP7zXH+1kn954br7Ov+9eSqq6v+0CwDBAT83bd0Q1fn2sP71JqhjFSRchuzlBn+4Rc/Mel5AAABlklEQVQ4y+2S2W7cMAxFSZqkJGuLl/FM0vX/v7J3Bm1RNPJDAhR9yZEhyssxSUj0wf9lru9WOX9+s3OptSLYy1Hfai4TWJ8ledv1FUIkxmP1afrJi2ceIcJ6ri7Pdfv+NfpO4ntr9CD8zsU2Vus0XSuBHv3bRhZTziUFDUdMlhuH1iHL0EWvl4IYbvELlurRkx+eYvDuGfGIM5EM+71OC7kr+S2jhCdN4Zack6fZ1eWITg5v3DC+R6FuMRr+s2kibyl6R0RSZJ99JyI7cynEGBvROm0kpMplZ6G9kO2kGOfuhtljfNSPGliM2YiZVQlrkzMXuVbM/ZaJtmmqYmTKAdlFgokJF7v3Kyfbu+Bd4PturcRqcHFnKiHQL1dpyAr5Ms+X+xm5EDKJsRTSwhDVuChUHrvzCmldr5ifaAir0AnzAg1cP8kYZD2nbsuy1ZmY58GgfwT/EVhICYSA9QMJzHTWrxR7EMwKLkZUykdryXNLKTtGPilcTU2saFFGNCoKt6cUQu8599Ba7v3Eff3470PIGB+8hx+ZERAx6QZ5mwAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAOVBMVEX///8JO5AKkdTF1eQ0pt5ws91NdZfa6/X5/P7s8fbI5vWu2vBTir8oUo3T3utLu+aYw+G6xdypuNABwmfiAAAAwUlEQVRIx+2S2w6DIBBExxUQVLTt/39sh8tD02ARY5s+eMzuGLOHbAy4+A1DX2VBEdPVMSjR7aFmDsjHmzTqmkykom0s5gazxxwzfPd4NJgWr6Mt2+Kw6eDzaG51E4jl4UK2mAaElkuJiNm37X2Jg37p2WfimZmT75BCHfUFc5SQMskhUyAKLFFWNJ9wkGKyfTY1YKnyRW4CZBOQEdum0GSjmuLdxLZJJiBkKM22WpFkrtz29H8rKFOf0VJH4+KPeQIK4AV0mcR/7gAAAABJRU5ErkJggg=="
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 25px"
              class="img-thumbnail"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAUVBMVEX///+qq6txbG7s8fbc3Ny4t7mhosKgoJ9QUFDF1eR0krLj5OTFxMWQkJDQ0NBNdZe6xdyPp8qpuNAoUo3a6/XT3uttfbuBgIHr7OsKPXdTir9C6A7KAAABVElEQVQ4y+2S607DMAyFHce5Oklz2QV4/wfFHtNgTBrS4B87ahK77Rf3uIGnnvpBfcLceev93vtd341uB/REBMnTTD353r3M+tT7a9SutV9r+VfvtzW31SGvsa1tQD6k8ZoOmypvaTv07cBXbJpz+JzmW06yjJRlzmOXO2iQht/DmHlKrNcL/J0s2UfRGmOsn2mIeAktQDN30ILlxWG45FGJC0v3UDBahmS0EApYF6uTm8GdWD6hthUWZ/qe5a/+CNFp7rDW2GzFYwDEgFVZQ4qaRsbaoLtxY/gKV4xVaAZCKROd2LDQogVjilFXDYAaOAJywLeej9qz45k1KIoERoAC4IyoKOj4G+c+TNcKcGYdEjHrN+vQgiq1ANdyMTSti5XNmeVouNTLP9Jes/DFtNtGRxS/DvHEolMPURdz6iEJbyQDK3s9KnaPklQM/+bUP/VP9A4SvwzyTzXTVQAAAABJRU5ErkJggg==" /></a
          ><br /><br />
          <h5>JASA PENGIRIMAN</h5>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//blibli-express.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//jne-express.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//ncs.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//fl.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//go-send.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//si-cepat.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//union.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//ncs-express.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//sap.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//anter-aja.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//paxel.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//alfa-trex.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//mex.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//rara.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//indah-cargo.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//xsys.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//janio.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//aei.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//tukang-kirim.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//id-express-59x34.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//Ninja-59x18.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//GrabExpress_New-59x16.png"
          /></a>
          <br /><br />
          <h5>LOGISTIK PENGEMBALIAN</h5>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//alfa-trex.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//blibli-express.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//pop-box.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//si-cepat.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//GrabExpress_New-59x16.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//anter-aja.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//paxel.png"
          /></a>
          <a href="/"
            ><img
              style="width: 55px; margin: 2px; height: 30px"
              class="img-thumbnail"
              src="https://www.static-src.com/siva/coreasset/02_2021//1614149898541//jne-express.png"
          /></a>
        </div>
      </div>
      <div
        style="
          margin-left: 50px;
          margin-right: 70px;
          font-family: effra, Helvetica, Arial, sans-serif;
        "
      >
        <hr style="height: 1.5px" />
        <p class="size12">
          Jualjual, Toko Online Terlengkap & Terpercaya Dengan Beragam Produk
          Pilihan Serta Promo Menarik
        </p>
        <h2 class="size14tebel">Very Big Choices Big Deals!!!!</h2>
        <br />
        <p class="size12tebel">
          <strong>JUALJUAL TOKO ONLINE NYA INDONESIA</strong>
        </p>
        <p class="size12">
          Sebagai mal online terbesar dan terpercaya, Jualjual menawarkan
          berbagai pilihan produk berkualitas yang disediakan oleh lebih dari
          100.000 mitra usaha, mulai dari kebutuhan primer, produk elektronik
          termasuk gadget, kebutuhan sehari-hari hingga produk untuk keperluan
          gaya hidup.<br /><br />Jualjual adalah e-commerce Indonesia yang
          menyediakan berbagai macam kebutuhan serta produk pilihan yang 100%
          Orisinil, pengiriman Cepat dan Gratis Ongkir, menyediakan layanan
          Customer Service 24 Jam bagi konsumen, transaksi belanja dan
          Pembayaran Aman, 15 hari retur produk dan layanan pembayaran Cash On
          Delivery langsung di rumahmu.<br /><br />Belanja Online Hemat & Puas
          di Jualjual, Karena Kamu No. 1.
        </p>
        <p class="size12tebel">
          <strong>KOLEKSI LENGKAP UNTUK SEMAU KEBUTUHANMU</strong>
        </p>
        <p class="size12">
          Menghadirkan ratusan ribu produk pilihan dari 17 kategori yang
          tersusun sistematis mulai dari kategori
          <strong>
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/handphone-tablet/54593/54593"
              >HP & Tablet</a
            >
            ,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/kamera/53184/53184"
              >Kamera</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/komputer-laptop/53270/53270"
              >Komputer</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/peralatan-elektronik/54650/54650"
              >Peralatan Elektronik</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/home-living/HO-1000001/HO-1000001"
              >Perlengkapan Rumah Tangga</a
            >
            ,<a
              class="blacklink"
              href="https://www.blibli.com/c/1/mainan-video-games/MA-1000001/MA-1000001"
              >Hobi & Mainan</a
            >,<a
              class="blacklink"
              href="https://www.blibli.com/c/1/fashion-pria-aksesoris/54817/54817"
            >
              Fashion Pria</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/fashion-wanita/54912/54912"
              >Fashion Wanita</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/kesehatan-kecantikan/53203/53203"
              >Kesehatan & Kecantikan</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/bliblimart/53400/53400"
              >Jualjualmart</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/ibu-anak/55076/55076"
            >
              Ibu & Anak</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/olahraga-aktivitas-luar-ruang/OL-1000001/OL-1000001"
            >
              Olahraga & Aktivitas Luar Ruang</a
            >
            ,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/tiket-voucher/TI-1000001/TI-1000001"
              >Tiket & Voucher</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/otomotif/53704/53704"
              >Otomotif</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/tour-travel/TO-1000064/TO-1000064"
              >Tur & Travel</a
            >,
            <a
              class="blacklink"
              href="https://www.blibli.com/c/1/galeri-indonesia/GA-1000036/GA-1000036"
              >Galeri Indonesia</a
            >,</strong
          >serta
          <strong
            ><a
              class="blacklink"
              href="https://www.blibli.com/digital/p/top-up-tagihan"
              >Tagihan & Isi Ulang.</a
            ></strong
          >
        </p>
        <p class="size12tebel"><strong>ADA APA SAJA DI JUALJUAL?</strong></p>
        <p class="size12">
          Kemudahan dan kenyamanan selalu jadi no. 1 untuk kamu. Jualjual, toko
          online yang menyediakan berbagai promo siap menghadirkan pengalaman
          belanja onlinemu serba hemat dan makin puas!
        </p>
        <ul class="size12">
          <li>
            Belanja kebutuhan sembako mulai dari<strong>
              <a class="blacklink" href="https://www.blibli.com/jual/beras">
                beras,</a
              >
              <a
                class="blacklink"
                href="https://www.blibli.com/jual/mie-instan"
              >
                mie instan,</a
              >
              <a
                class="blacklink"
                href="https://www.blibli.com/harga/gula-pasir-1-kg"
                >gula,</a
              >
              <a
                class="blacklink"
                href="https://www.blibli.com/jual/tepung-terigu"
                >tepung terigu</a
              >
            </strong>
            dan lainnya bisa dibeli langsung di Jualjualmart, bebas panik
            langsung klik!
          </li>
          <li>
            Bayar transaksi tagihan bulanan tanpa khawatir mulai dari<strong>
              <a class="blacklink" href="https://www.blibli.com/digital/p/bpjs">
                BPJS,</a
              ></strong
            >
            tagihan listrik praktis & serba mudah.
          </li>
          <li>
            Bisa tukar tambah gadget/barang elektronik favoritmu hingga tukar
            tambah PlayStation langsung dari aplikasi Blibli kamu!
          </li>
          <li>
            Dapatkan promo terbaik serba ciamik mulai dari:
            <strong>
              <a
                class="blacklink"
                href="https://www.blibli.com/flashsale?appsWebview=true"
              >
                Flash Sale,
              </a>
              <a
                class="blacklink"
                href="https://www.blibli.com/promosi/histeria-brand?appsWebview=true"
              >
                Brand Deals,
              </a>
              <a
                class="blacklink"
                href="https://www.blibli.com/promosi/blibli-histeria?appsWebview=true"
              >
                Harbolnas,</a
              >
            </strong>
            Belanja Seru 9.9, Promo Harbolnas 10.10,
            <strong>
              <a
                class="blacklink"
                href="https://www.blibli.com/promosi/blibli-histeria?appsWebview=true"
                >Promo 11.11,
              </a></strong
            >dan 12.12. Belanja lebih hemat dan murah dengan diskon serba
            meriah! Nantikan juga
            <strong>
              <a
                class="blacklink"
                href="https://www.blibli.com/promosi/ulang-tahun?appsWebview=true"
                >promo ulang tahun Jualjual
              </a></strong
            >dengan banyak kejutan meriah buat kamu!
          </li>
        </ul>
        <p class="size12tebel">
          <strong
            >PENUHI KEBUTUHAN KESEHARIANMU DARI PRODUK-PRODUK TERBAIK DI
            JUALJUAL</strong
          >
        </p>
      </div>
      <div style="background-color: #f1f1f1; height: 61px">
        <div
          class="size12"
          style="
            margin-left: 50px;
            margin-right: 70px;
            padding-top: 25px;
            font-family: effra, Helvetica, Arial, sans-serif;
          "
        >
          <p style="float: left">
            Jualjual © 2021 | Toko online dengan sensasi belanja ala mall.
          </p>
          <p style="float: right">
            <a
              class="size12"
              style="text-decoration: none"
              href="https://www.blibli.com/faq/tentang-blibli/syarat-ketentuan/"
              >Syarat & Ketentuan</a
            >
            |
            <a
              class="size12"
              style="text-decoration: none"
              href="https://www.blibli.com/faq/tentang-blibli/kebijakan-privasi/"
              >Kebijakan Privasi</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  // computed: {
  //   logout() {
  //     return JSON.parse(sessionStorage.getItem("USER_DATA"));
  //   },
  // },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
  userRole() {
    return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
  },
};
</script>

<style>
.isirouterdesu {
  padding-left: 75px;
  padding-right: 75px;
  margin-top: 100px;
}
#category {
  position: absolute;
  margin-top: 30px;
  margin-left: -90px;
}
#navdropdown {
  color: white;
  text-decoration: none;
}
.cursehuman {
  line-height: 21px;
  background-repeat: repeat;
  height: 88px;
  width: 212px;
  /* Positioning */
  position: fixed;
  top: 607px;
  bottom: 0px;
  right: 0px;
  float: none;
  display: table;
  clear: none;
  z-index: 10;
}

.butuhbantu {
  padding-top: 14px;
  padding-left: 28px;
  padding-bottom: 14px;
  padding-right: 28px;
  font-family: efframedium, Helvetica, Arial, sans-serif;
  text-decoration: none solid rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: #198754;
  color: rgb(255, 255, 255);
  border: 0px none #00ff00;
  border-radius: 16px;
}
.butuhbantu:hover {
  color: white;
  background-color: #00ff00;
}
#hoverdrop {
  background-color: lime;
  color: black;
}
#budakbawahan {
  font-size: 14px;
  text-decoration: none;
  color: black;
}
#budakbawahanpic {
  padding-left: 5px;
}
.bantu {
  width: 140px;
}
.judulfoot {
  font-size: 14px;
}
.cscare {
  width: 240px;
  margin-left: 155px;
  margin-top: -182px;
}
.info {
  width: 190px;
  margin-left: 410px;
  margin-top: -280px;
}
.collab {
  width: 215px;
  margin-left: 610px;
  margin-top: -228px;
}
.sosmed {
  width: 370px;
  margin-left: 830px;
  margin-top: -318px;
}
.cicilan {
  width: 450px;
}
.metode {
  width: 430px;
  margin-left: 480px;
  margin-top: -310px;
}
.keamanan {
  width: 440px;
  margin-left: 856px;
  margin-top: -165px;
}
.size12 {
  font-size: 12px;
  font-weight: 400;
}
.size12tebel {
  font-size: 12px;
  font-weight: 700;
}
.size14tebel {
  font-size: 14px;
  font-weight: 700;
}
.size14 {
  font-size: 14px;
}
.size16 {
  font-size: 16px;
  font-weight: 700;
}
.blacklink {
  text-decoration: none;
  font-weight: 700;
  color: black;
}
.blacklink:hover {
  color: black;
}
.dropbtn {
  color: rgba(0, 0, 0, 0.527);
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #f1f1f100;
  padding-top: 8px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
