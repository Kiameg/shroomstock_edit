import { useEffect, useState } from "react";
import TicketsStepContent from "./TicketsStepContent";
import { Steps, Button } from "antd";
import AreaStepContent from "./AreaStepContent";
import GreenStepContent from "./GreenStepContent";
import TentsStepContent from "./TentsStepContent";
import InfoStepContent from "./InfoStepContent";
import PropTypes from 'prop-types'
import PaymentStepContent from "./PaymentStepContent";
import "../css/style.css";
import "../css/steps.css";
import ConfirmationStepContent from "./ConfirmationStepContent";
import { createClient } from '@supabase/supabase-js'

//acces to database(supabase) for post on fullfill reservation
const supabaseUrl = 'https://xkgelrazjiauqofjiphw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2VscmF6amlhdXFvZmppcGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MDI3NDksImV4cCI6MjAxODM3ODc0OX0.9In6K8X4winO_EOdC_KLC0jOFXov1ImtZWTT8RU_-q4"
const supabase = createClient(supabaseUrl, supabaseKey)

//flower icon on process line and no fill in flower icon, if status on step is 'wait' 
const customDot = (_, { status }) => (
    <svg width="60" height="60" viewBox="20 20 118 115" fill={status === 'wait' ? 'none' : '#EE5920'} xmlns="http://www.w3.org/2000/svg">
    <path d="M48.5318 40.3952L49.6214 40.8895L49.9144 39.7294C49.9517 39.582 49.9915 39.4371 50.0339 39.2948C50.0799 39.1399 50.0867 38.9827 50.06 38.8338C50.1726 38.7333 50.2641 38.6056 50.3233 38.4556C50.4336 38.1763 50.5542 37.9079 50.6844 37.6501C50.7565 37.5074 50.7912 37.3556 50.7921 37.2059C50.9199 37.1283 51.0322 37.0207 51.1175 36.8857C51.2757 36.6354 51.4439 36.3966 51.6211 36.1694C51.7189 36.0441 51.782 35.9027 51.8121 35.7569C51.9519 35.706 52.0825 35.6229 52.1923 35.508C52.3953 35.2956 52.6072 35.0954 52.8272 34.9072C52.9482 34.8037 53.0384 34.6776 53.0969 34.5405C53.2445 34.5186 53.3894 34.4632 53.5202 34.3722C53.761 34.2048 54.0092 34.05 54.2639 33.9078C54.4033 33.83 54.5169 33.7237 54.6014 33.6002C54.7509 33.6076 54.9044 33.5813 55.0508 33.5172C55.3199 33.3994 55.5944 33.2945 55.8733 33.2025C56.0257 33.1523 56.1578 33.069 56.2645 32.9631C56.4106 32.9985 56.5669 33.0014 56.7234 32.9654C57.0106 32.8994 57.301 32.8466 57.5932 32.8069C57.7527 32.7852 57.8983 32.7271 58.0227 32.642C58.1603 32.7035 58.3139 32.7347 58.4748 32.7275C58.7697 32.7142 59.0653 32.7142 59.3602 32.7275C59.521 32.7347 59.6747 32.7035 59.8123 32.642C59.9367 32.7271 60.0822 32.7852 60.2417 32.8069C60.534 32.8466 60.8243 32.8994 61.1116 32.9654C61.2681 33.0014 61.4244 32.9985 61.5705 32.9631C61.6771 33.069 61.8093 33.1523 61.9617 33.2025C62.2406 33.2945 62.5151 33.3994 62.7842 33.5172C62.9306 33.5813 63.0841 33.6076 63.2336 33.6002C63.3181 33.7237 63.4316 33.83 63.5711 33.9078C63.8258 34.05 64.074 34.2048 64.3148 34.3722C64.4455 34.4632 64.5905 34.5185 64.738 34.5405C64.7965 34.6776 64.8868 34.8037 65.0078 34.9072C65.2277 35.0954 65.4397 35.2956 65.6426 35.508C65.7524 35.6229 65.883 35.706 66.0229 35.7569C66.0529 35.9027 66.1161 36.0441 66.2139 36.1694C66.3911 36.3966 66.5592 36.6354 66.7175 36.8857C66.8028 37.0207 66.9151 37.1283 67.0429 37.2059C67.0438 37.3556 67.0784 37.5074 67.1505 37.6501C67.2807 37.9078 67.4014 38.1763 67.5117 38.4556C67.5709 38.6056 67.6623 38.7332 67.7749 38.8338C67.7482 38.9827 67.755 39.1399 67.8011 39.2948C67.8435 39.4371 67.8833 39.582 67.9205 39.7294L68.2135 40.8895L69.3032 40.3952C69.4417 40.3324 69.5798 40.2732 69.7175 40.2175C69.8674 40.157 69.9945 40.0643 70.0943 39.9505C70.2431 39.9759 70.4 39.9678 70.5542 39.9205C70.8414 39.8326 71.1265 39.7596 71.4092 39.7007C71.5658 39.6681 71.7061 39.6005 71.8237 39.5078C71.9641 39.5594 72.1183 39.5801 72.277 39.5627C72.5714 39.5303 72.863 39.513 73.1511 39.5099C73.3101 39.5082 73.46 39.4695 73.5928 39.402C73.7198 39.4797 73.8662 39.5301 74.0245 39.5443C74.3171 39.5706 74.6059 39.6116 74.8901 39.6663C75.0465 39.6965 75.2014 39.6884 75.3451 39.6487C75.4542 39.7504 75.5879 39.8293 75.7405 39.8749C76.0215 39.9588 76.2973 40.0565 76.5672 40.1671C76.7151 40.2277 76.869 40.2503 77.0182 40.2394C77.1057 40.3609 77.2218 40.4646 77.3633 40.5392C77.6231 40.6762 77.8763 40.8256 78.122 40.9865C78.2563 41.0744 78.4039 41.1258 78.5531 41.1432C78.6165 41.2796 78.7116 41.4037 78.8373 41.5037C79.068 41.6873 79.2903 41.8814 79.5034 42.0854C79.6198 42.1966 79.756 42.2743 79.9001 42.3186C79.9377 42.4645 80.0091 42.6042 80.115 42.7255C80.3092 42.948 80.4933 43.1792 80.6668 43.4182C80.7614 43.5485 80.8816 43.6492 81.0155 43.7186C81.0264 43.8689 81.0717 44.019 81.1542 44.1573C81.3053 44.4106 81.4449 44.6707 81.5723 44.9366C81.6418 45.0814 81.7415 45.2019 81.8603 45.2941C81.8439 45.4435 81.8611 45.5988 81.9168 45.7494C82.0188 46.0248 82.1079 46.305 82.1835 46.5889C82.2246 46.7434 82.2998 46.8798 82.3987 46.9922C82.3548 47.1352 82.3425 47.2904 82.3686 47.448C82.4162 47.7358 82.4499 48.0265 82.4691 48.3192C82.4795 48.4782 82.5266 48.6261 82.6015 48.7552C82.5307 48.8865 82.4883 49.0357 82.4829 49.1949C82.4729 49.4842 82.4485 49.7749 82.409 50.0661C82.3876 50.2236 82.4042 50.3775 82.4516 50.5187C82.3563 50.6331 82.2852 50.7707 82.2482 50.9253C82.181 51.2056 82.0993 51.486 82.0023 51.7659C81.95 51.9168 81.9359 52.0717 81.9549 52.2201C81.8384 52.3142 81.7413 52.436 81.6747 52.5814C81.5545 52.844 81.4199 53.1058 81.2703 53.3663C81.19 53.5061 81.1473 53.6573 81.1389 53.8081C81.0058 53.8801 80.8872 53.9835 80.7948 54.1161C80.71 54.238 80.6216 54.3596 80.5296 54.4806L79.8061 55.4326L80.871 55.9763C81.0064 56.0455 81.1388 56.1166 81.2682 56.1897C81.409 56.2691 81.5608 56.3108 81.7119 56.3179C81.7849 56.4501 81.889 56.5678 82.0221 56.659C82.2699 56.8288 82.5048 57.0063 82.7271 57.1907C82.8502 57.2928 82.9906 57.3604 83.1364 57.3946C83.1836 57.5366 83.2635 57.6701 83.3761 57.7834C83.585 57.9935 83.7804 58.2107 83.9625 58.4341C84.063 58.5574 84.1868 58.6505 84.3223 58.7123C84.3408 58.86 84.3927 59.0059 84.4803 59.1386C84.6422 59.3839 84.7903 59.6352 84.9248 59.8916C84.9988 60.0327 85.1018 60.1487 85.2225 60.2363C85.211 60.3851 85.2327 60.5388 85.2923 60.6866C85.402 60.9587 85.4977 61.2353 85.5797 61.5153C85.6246 61.6687 85.703 61.8031 85.8046 61.913C85.7642 62.0572 85.7556 62.2127 85.7856 62.3698C85.8406 62.6585 85.8818 62.9496 85.9094 63.242C85.9245 63.4018 85.9764 63.5493 86.056 63.6768C85.9889 63.8114 85.9513 63.9633 85.9515 64.1239C85.952 64.4188 85.939 64.7137 85.9127 65.0076C85.8983 65.168 85.9227 65.3229 85.978 65.4631C85.8874 65.5836 85.8228 65.7266 85.7941 65.8851C85.7414 66.1757 85.6757 66.4639 85.5971 66.7486C85.5543 66.9039 85.5506 67.0607 85.58 67.2086C85.4693 67.311 85.3802 67.44 85.3237 67.5908C85.22 67.867 85.1038 68.1384 84.9756 68.4039C84.9057 68.5485 84.8738 68.7017 84.8759 68.8521C84.7489 68.9325 84.6382 69.0428 84.5553 69.1803C84.4036 69.4319 84.2403 69.6763 84.0655 69.9125C83.9704 70.0411 83.9107 70.185 83.8846 70.3324C83.7454 70.3873 83.6165 70.4745 83.5095 70.5932C83.3142 70.81 83.108 71.0176 82.8912 71.2152C82.7734 71.3226 82.6872 71.4516 82.6331 71.5907C82.4863 71.6172 82.3432 71.6771 82.2153 71.7721C81.9829 71.9448 81.7405 72.107 81.4882 72.2577C81.3517 72.3392 81.2416 72.4482 81.1609 72.5733C81.012 72.5701 80.8601 72.6003 80.7161 72.6677C80.455 72.79 80.1848 72.9009 79.9055 72.9996C79.7548 73.0528 79.6249 73.1383 79.5208 73.2458C79.3746 73.2133 79.2188 73.2133 79.0636 73.2519C78.7833 73.3215 78.4946 73.3795 78.1977 73.4249C78.0382 73.4493 77.8934 73.5101 77.7702 73.5976C77.631 73.5384 77.4762 73.51 77.3148 73.5205C77.1666 73.5302 77.0164 73.5368 76.8644 73.5403L75.6686 73.5679L75.9077 74.7399C75.938 74.8888 75.965 75.0367 75.9886 75.1833C76.0142 75.3429 76.0763 75.4875 76.1649 75.61C76.1071 75.7495 76.08 75.9042 76.0917 76.0651C76.1135 76.3645 76.1212 76.6588 76.1156 76.9475C76.1126 77.1074 76.1472 77.2592 76.2113 77.3945C76.1298 77.5199 76.0753 77.6656 76.057 77.8242C76.023 78.1184 75.9751 78.4065 75.9139 78.6881C75.8802 78.8435 75.8846 78.9982 75.9209 79.1427C75.8169 79.2492 75.7352 79.3807 75.6862 79.5319C75.5955 79.8114 75.4914 80.0838 75.3748 80.3487C75.3107 80.4945 75.2841 80.6473 75.2909 80.7963C75.1675 80.8801 75.0609 80.9929 74.9826 81.1316C74.8383 81.3869 74.6818 81.6341 74.5141 81.8727C74.4222 82.0034 74.366 82.1485 74.3435 82.2964C74.2056 82.3547 74.0787 82.445 73.9746 82.5663C73.7834 82.7893 73.5816 83.003 73.3702 83.2069C73.2547 83.3183 73.1718 83.4508 73.1218 83.5925C72.9748 83.624 72.8326 83.6892 72.7073 83.7896C72.4772 83.9738 72.2386 84.1475 71.9925 84.3101C71.8582 84.3989 71.7523 84.5145 71.6772 84.6451C71.5265 84.6495 71.3746 84.6881 71.2328 84.7645C70.9728 84.9045 70.7066 85.0328 70.4352 85.1489C70.2872 85.2123 70.1623 85.3071 70.065 85.4222C69.916 85.3996 69.7596 85.4105 69.6066 85.4602C69.326 85.5514 69.0415 85.6299 68.7541 85.6951C68.5975 85.7307 68.458 85.8012 68.3418 85.8965C68.1997 85.8474 68.0445 85.8297 67.8854 85.8507C67.5942 85.889 67.3014 85.9137 67.0078 85.9243C66.8481 85.9302 66.6984 85.9731 66.5669 86.0447C66.4372 85.9701 66.2888 85.9237 66.1293 85.9141C65.8382 85.8966 65.5474 85.8649 65.2578 85.8186C65.1005 85.7935 64.946 85.8065 64.8035 85.8508C64.6913 85.7526 64.5552 85.6782 64.4013 85.6375C64.1215 85.5635 63.8436 85.4751 63.5686 85.3718C63.4198 85.3159 63.2661 85.2978 63.118 85.3126C63.0277 85.1943 62.9095 85.0944 62.767 85.0238C62.5087 84.896 62.2536 84.7539 62.0025 84.5971C61.867 84.5125 61.7192 84.4643 61.5704 84.4498C61.5046 84.3153 61.4075 84.1935 61.2807 84.0962C61.0515 83.9205 60.8263 83.731 60.6058 83.5272C60.4874 83.4178 60.3496 83.3424 60.2045 83.3006C60.164 83.1549 60.0897 83.0162 59.981 82.8966C59.8811 82.7867 59.7823 82.6735 59.6848 82.5568L58.9175 81.6385L58.1501 82.5568C58.0526 82.6735 57.9539 82.7867 57.854 82.8966C57.7453 83.0162 57.6709 83.1549 57.6304 83.3006C57.4853 83.3424 57.3476 83.4178 57.2291 83.5272C57.0086 83.731 56.7834 83.9205 56.5543 84.0962C56.4274 84.1935 56.3303 84.3153 56.2646 84.4498C56.1158 84.4643 55.9679 84.5125 55.8325 84.5971C55.5813 84.7539 55.3262 84.896 55.068 85.0238C54.9255 85.0944 54.8073 85.1943 54.7169 85.3126C54.5688 85.2978 54.4151 85.3159 54.2663 85.3718C53.9913 85.4751 53.7135 85.5635 53.4337 85.6375C53.2797 85.6782 53.1437 85.7526 53.0315 85.8508C52.889 85.8065 52.7344 85.7935 52.5771 85.8186C52.2876 85.8649 51.9968 85.8966 51.7056 85.9141C51.5462 85.9237 51.3977 85.9701 51.268 86.0447C51.1365 85.9731 50.9869 85.9302 50.8271 85.9243C50.5336 85.9137 50.2407 85.889 49.9496 85.8507C49.7905 85.8297 49.6352 85.8474 49.4932 85.8965C49.377 85.8012 49.2374 85.7307 49.0808 85.6951C48.7934 85.6299 48.5089 85.5514 48.2284 85.4602C48.0753 85.4105 47.9189 85.3996 47.77 85.4222C47.6727 85.3071 47.5478 85.2123 47.3998 85.1489C47.1283 85.0328 46.8621 84.9045 46.6021 84.7645C46.4604 84.6881 46.3084 84.6495 46.1578 84.6451C46.0827 84.5145 45.9768 84.3989 45.8425 84.3101C45.5964 84.1475 45.3578 83.9738 45.1277 83.7896C45.0023 83.6892 44.8602 83.624 44.7132 83.5925C44.6631 83.4508 44.5802 83.3183 44.4647 83.2069C44.2534 83.003 44.0516 82.7893 43.8603 82.5663C43.7562 82.445 43.6294 82.3547 43.4915 82.2964C43.4689 82.1485 43.4128 82.0034 43.3209 81.8727C43.1531 81.6341 42.9967 81.3869 42.8524 81.1316C42.774 80.9929 42.6675 80.8801 42.544 80.7963C42.5508 80.6473 42.5243 80.4945 42.4602 80.3487C42.3436 80.0838 42.2395 79.8114 42.1488 79.5319C42.0997 79.3807 42.0181 79.2492 41.9141 79.1427C41.9503 78.9982 41.9547 78.8435 41.921 78.6881C41.8599 78.4065 41.8119 78.1184 41.7779 77.8242C41.7596 77.6656 41.7051 77.5199 41.6236 77.3945C41.6878 77.2592 41.7224 77.1074 41.7193 76.9475C41.7138 76.6588 41.7215 76.3645 41.7432 76.0651C41.7549 75.9042 41.7279 75.7495 41.6701 75.61C41.7587 75.4875 41.8208 75.3429 41.8464 75.1833C41.87 75.0367 41.8969 74.8888 41.9273 74.7399L42.1663 73.5679L40.9706 73.5403C40.8185 73.5368 40.6684 73.5302 40.5201 73.5205C40.3588 73.51 40.204 73.5384 40.0647 73.5976C39.9416 73.5101 39.7967 73.4493 39.6373 73.4249C39.3404 73.3795 39.0517 73.3215 38.7714 73.2519C38.6161 73.2133 38.4604 73.2133 38.3142 73.2458C38.21 73.1383 38.0801 73.0528 37.9295 72.9996C37.6501 72.9009 37.3799 72.79 37.1189 72.6677C36.9749 72.6003 36.823 72.5701 36.6741 72.5733C36.5933 72.4482 36.4833 72.3392 36.3468 72.2577C36.0945 72.107 35.852 71.9448 35.6197 71.7721C35.4918 71.6771 35.3487 71.6172 35.2019 71.5907C35.1478 71.4516 35.0615 71.3226 34.9437 71.2152C34.7269 71.0176 34.5207 70.81 34.3254 70.5932C34.2185 70.4745 34.0895 70.3873 33.9503 70.3324C33.9243 70.185 33.8646 70.0411 33.7695 69.9125C33.5947 69.6763 33.4313 69.4319 33.2797 69.1803C33.1968 69.0428 33.0861 68.9325 32.9591 68.8521C32.9612 68.7017 32.9293 68.5485 32.8594 68.4039C32.7311 68.1384 32.615 67.867 32.5113 67.5908C32.4547 67.44 32.3656 67.311 32.255 67.2086C32.2844 67.0607 32.2806 66.9039 32.2378 66.7486C32.1593 66.4639 32.0936 66.1757 32.0409 65.885C32.0122 65.7266 31.9476 65.5837 31.857 65.4631C31.9123 65.3229 31.9366 65.168 31.9223 65.0076C31.896 64.7137 31.8829 64.4188 31.8834 64.1239C31.8837 63.9633 31.8461 63.8115 31.779 63.6768C31.8585 63.5493 31.9105 63.4018 31.9255 63.242C31.9531 62.9496 31.9944 62.6585 32.0494 62.3698C32.0794 62.2127 32.0708 62.0572 32.0303 61.913C32.132 61.8031 32.2104 61.6687 32.2553 61.5153C32.3372 61.2353 32.433 60.9587 32.5426 60.6867C32.6022 60.5388 32.624 60.3852 32.6124 60.2363C32.7332 60.1487 32.8361 60.0327 32.9101 59.8916C33.0446 59.6352 33.1927 59.3839 33.3547 59.1386C33.4423 59.0059 33.4942 58.86 33.5126 58.7123C33.6482 58.6505 33.772 58.5574 33.8725 58.4341C34.0546 58.2107 34.2499 57.9935 34.4588 57.7834C34.5715 57.6701 34.6514 57.5366 34.6986 57.3947C34.8444 57.3605 34.9847 57.2928 35.1078 57.1907C35.3302 57.0063 35.5651 56.8288 35.8129 56.659C35.9459 56.5678 36.0501 56.4501 36.123 56.3179C36.2742 56.3108 36.426 56.2691 36.5668 56.1897C36.6961 56.1166 36.8286 56.0455 36.964 55.9763L38.0289 55.4326L37.3054 54.4806C37.2134 54.3596 37.125 54.238 37.0401 54.1161C36.9478 53.9835 36.8291 53.8801 36.6961 53.8081C36.6877 53.6573 36.645 53.5061 36.5646 53.3663C36.4151 53.1058 36.2805 52.844 36.1602 52.5814C36.0936 52.436 35.9966 52.3142 35.88 52.2201C35.8991 52.0717 35.885 51.9168 35.8327 51.7659C35.7357 51.486 35.6539 51.2056 35.5868 50.9253C35.5498 50.7707 35.4786 50.6331 35.3833 50.5187C35.4308 50.3775 35.4473 50.2236 35.426 50.0661C35.3864 49.7749 35.362 49.4842 35.3521 49.1949C35.3466 49.0357 35.3042 48.8865 35.2334 48.7552C35.3084 48.6261 35.3554 48.4782 35.3659 48.3192C35.3851 48.0265 35.4188 47.7358 35.4664 47.448C35.4925 47.2904 35.4801 47.1352 35.4362 46.9922C35.5352 46.8798 35.6104 46.7434 35.6515 46.5889C35.7271 46.305 35.8162 46.0248 35.9181 45.7494C35.9739 45.5988 35.991 45.4435 35.9747 45.2941C36.0935 45.2019 36.1932 45.0814 36.2626 44.9366C36.39 44.6707 36.5297 44.4106 36.6808 44.1573C36.7633 44.019 36.8085 43.8689 36.8195 43.7186C36.9534 43.6493 37.0735 43.5485 37.1681 43.4182C37.3416 43.1792 37.5258 42.948 37.72 42.7255C37.8259 42.6042 37.8972 42.4646 37.9349 42.3186C38.079 42.2743 38.2152 42.1966 38.3315 42.0854C38.5447 41.8815 38.767 41.6873 38.9977 41.5037C39.1233 41.4037 39.2185 41.2796 39.2818 41.1432C39.4311 41.1258 39.5787 41.0744 39.713 40.9865C39.9587 40.8256 40.2118 40.6762 40.4717 40.5392C40.6131 40.4646 40.7293 40.3609 40.8167 40.2394C40.9659 40.2503 41.1199 40.2277 41.2677 40.1671C41.5376 40.0565 41.8134 39.9588 42.0944 39.8749C42.2471 39.8293 42.3807 39.7504 42.4898 39.6487C42.6336 39.6884 42.7885 39.6965 42.9449 39.6663C43.2291 39.6116 43.5178 39.5706 43.8105 39.5443C43.9688 39.5301 44.1151 39.4797 44.2421 39.4021C44.3749 39.4695 44.5248 39.5082 44.6838 39.5099C44.972 39.513 45.2635 39.5303 45.5579 39.5627C45.7167 39.5801 45.8708 39.5594 46.0112 39.5078C46.1288 39.6005 46.2692 39.6681 46.4257 39.7007C46.7084 39.7596 46.9936 39.8326 47.2807 39.9205C47.435 39.9678 47.5918 39.9759 47.7407 39.9505C47.8404 40.0643 47.9676 40.157 48.1174 40.2175C48.2552 40.2732 48.3933 40.3324 48.5318 40.3952Z" stroke="#EE5920" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 1"/>
    </svg>
    
);

//send reservation with area and number of tickets to database on glitch and get id and timeout to later fullfill reservation
const reserve = (selectedArea, regularTicketCount,vipTicketCount, setReservation) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "area": selectedArea,
            "amount": regularTicketCount + vipTicketCount
          })
    };

    fetch('https://shroomstockfestival.glitch.me/reserve-spot', requestOptions)
        .then(response => response.json())
        .then(({id, timeout}) => setReservation({
            id,
            timeout,
        }))
}

//function: validation if whether or not there has been selected an area
function isAreaValid(selectedArea){
    const isSelectedAreaEmpty = !selectedArea
    if(isSelectedAreaEmpty){
        return false
    }
    return true 
}


//function: validation if there has been typed in a name/any value in all the fields matching the number of tickets
function isNameInfoValid(nameObject, vipTicketCount, regularTicketCount){
    const nameList = Object.values(nameObject)
    const hasNameForAllTickets = nameList.length === vipTicketCount + regularTicketCount
    const allNamesHasAValue = nameList.every(entry => entry)
    if(!hasNameForAllTickets || !allNamesHasAValue){
        return false
    }
    return true
}


//function: validation if all billing information has been filled out and if the email is repeated correctly
const PAYMENT_STEP_NO = 5
function isBillingInfoValid(billingInfo){
    if(!billingInfo.firstname || !billingInfo.lastname || !billingInfo.address || !billingInfo.zipcode || !billingInfo.city || !billingInfo.phone){
        return false
    }
    if(billingInfo.email !== billingInfo.repeat){
        return false
    }
    return true 
}

//function: validation if all payment information has been filled out and if terms has been accepted
function isPaymentInfoValid(paymentInfo, paymentChoice, terms){
    if(paymentChoice === "creditcards") {
        if(!paymentInfo.cartholdername || !paymentInfo.cartnumber || !paymentInfo.expdate || !paymentInfo.cvc){
        return false
        }
        if(!terms){
            return false
        }
        return true 
        }
    else {
        if(!paymentInfo.phone){
        return false
        }
        if(!terms){
            return false
        }
        return true 
    }
}

//states
const StepsTab = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [regularTicketCount, setRegularTickets] = useState(0)
  const [vipTicketCount, setVipTickets] = useState(0)
  const [selectedArea, setSelectedArea] = useState(0)
  const [reservation, setReservation] = useState(null)
  const [selectedGreenOption, setSelectedGreenOption] = useState(false)
  const [smallTentCount, setSmallTents] = useState(0)
  const [bigTentCount, setBigTents] = useState(0)
  const [nameList, setNameList] = useState({})
  const [billingInfo, setBillingInfo] = useState({})
  const [paymentChoice, setPaymentChoice] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState({})
  const [confirmedTerms, setConfirmTerms] = useState(false)
  const [stepIsValid, setStepIsValid] = useState(true)
  

//send fullfilled reservation to supabase database and move one step further in steptabs
  const onFinish = async () =>
  {
    await supabase
      .from('shroomstock_posts')
      .insert({
          "reservationid": reservation.id,
          "smalltents": smallTentCount,
          "bigtents": bigTentCount,
          "greencamping": selectedGreenOption,
          "names": Object.values(nameList),
          "billinginfo": billingInfo,
          "paymentmethod": paymentChoice,
          "paymentinfo": paymentInfo,
        })
  
      setCurrentStep(currentStep + 1)
  }

 //function to update state for name conversion
  const nameConverter = (key, name) => {
    setNameList({
        ...nameList,
        [key]: name
    })
  }

 //function to update billing information state
  const billingInfoConverter = (property, value) => {
    setBillingInfo({
        ...billingInfo,
        [property]: value,
    })
  }

  //function to update billing information state
  const paymentInfoConverter = (property, value) => {
    setPaymentInfo({
        ...paymentInfo,
        [property]: value,
    })
  }

  useEffect(() => {
    let isValid = true
    //if the current step is the payment step (step 5) -> check if billing and payment info has been filled as well as terms accepted
    if(currentStep === PAYMENT_STEP_NO){
        isValid = isBillingInfoValid(billingInfo)
        isValid = isPaymentInfoValid(paymentInfo, paymentChoice, confirmedTerms)
    //if the current step is the info step (step 4) -> check if there are names typed in for all participants
    } else if(currentStep === 4){
        isValid = isNameInfoValid(nameList, vipTicketCount, regularTicketCount)
    }
    //if the current step is the area step (step 1) -> check if there has been an area seleceted
    else if(currentStep === 1){
        isValid = isAreaValid(selectedArea)
    }
    setStepIsValid(isValid)

  }, [billingInfo, currentStep, nameList, paymentInfo, paymentChoice, selectedArea, vipTicketCount, regularTicketCount, confirmedTerms])


  //function for back button.
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };


  //function for next step button. If new step is 2 run reserve function. If new step is 6, run onFinish function.
  const handleNextStep = () => {
    const newStep = currentStep + 1
    console.log({currentStep})
    setCurrentStep(newStep);
    if(newStep == 2){
        reserve(selectedArea, regularTicketCount, vipTicketCount, setReservation)
    }
    if(newStep == 6){
        onFinish(reservation)
    }
  };


  //content of each step and relevant props for each step to have on its content component.
  const stepContent = [
    <TicketsStepContent 
        key={"TicketsStepContent"} 
        setRegularTickets={setRegularTickets} 
        setVipTickets={setVipTickets} />,
    <AreaStepContent 
        key={"AreaStepContent"} 
        setArea={setSelectedArea} 
        ticketsWanted={regularTicketCount + vipTicketCount} />,
    <GreenStepContent 
        key={"GreenStepContent"} 
        setGreen={setSelectedGreenOption} 
        green={selectedGreenOption}/>,
    <TentsStepContent 
        key={"TentsStepContent"} 
        setSmallTents={setSmallTents} 
        setBigTents={setBigTents} 
        maxTents={regularTicketCount + vipTicketCount}/>,
    <InfoStepContent 
        key={"InfoStepContent"} 
        setNameList={nameConverter} 
        participantsTotal={regularTicketCount + vipTicketCount} />,
    <PaymentStepContent
        key={"PaymentStepContent"}
        setBillingInfo={billingInfoConverter}
        setPaymentInfo={paymentInfoConverter}
        setPaymentChoice={setPaymentChoice}
        paymentChoice={paymentChoice}
        setTerms={setConfirmTerms}
        terms={confirmedTerms}
    />,
    <ConfirmationStepContent key={"ConfirmationStepContent"} />,
  ];


//what it shows: the step in a process line and each step's title + buttons (buy now->if current step is 0, back -> if current step is bigger than 0 and smaller than 6, next -> current step is less than 5 and bigger than 0, confirm -> if current step is 5) 
  return (
    <><Steps
        current={currentStep}
        
        progressDot={customDot}
        items={[
          {
            title: "Ticket",
          },
          {
            title: "Area",
          },
          {
            title: "Green",
          },
          {
            title: "Tents",
          },
          {
            title: "Info",
          },
          {
            title: "Payment",
          },
          {
            title: "Confirmation",
          },
        ]}
        
      />
      
      <div>
        
        <div>{stepContent[currentStep]}</div>
        { currentStep === 0 && <Button className="buynow_button" disabled={!stepIsValid} type="primary" onClick={handleNextStep}>
          Buy now
        </Button>
        }

        <div className="buttons">{currentStep > 0 && currentStep < 6 && <Button className="back_button" type="secondary" onClick={handlePreviousStep} disabled={currentStep === 0}>
          Back
        </Button>}
        
        {currentStep < PAYMENT_STEP_NO && currentStep > 0 && <Button className="next_button" disabled={!stepIsValid} type="primary" onClick={handleNextStep}>
          Next
        </Button>
        }

        { currentStep === PAYMENT_STEP_NO && <Button className="confirm_button" disabled={!stepIsValid} type="primary" onClick={onFinish}>
          Confirm
        </Button>
        
        }
        </div>
      </div>
    </>
  );
};

StepsTab.propTypes = {
    setReservationId: PropTypes.func
}

export default StepsTab;
