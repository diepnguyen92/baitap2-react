import React from "react";
import Cartcontent from "./Cartcontent";

const Content = () => {
  const data = [
    {
      id: 1,
      title: "Upload file trong SpringBoot sử dụng Cloudinary",
      image: "https://media.techmaster.vn/api/static/9479/OHDr9jc_",
      content:
        "Cloudinary là một nền tảng đám mây cung cấp giải pháp toàn diện cho việc tải lên...",
      view: 46,
      date: "20-04-2024",
    },
    {
      id: 2,
      title: "Tìm hiểu cách đọc file trong Java",
      image: "https://media.techmaster.vn/api/static/P3QkezMU/bylkb7K0",
      content:
        "Trong hướng dẫn này, chúng ta sẽ khám phá các cách khác nhau để đọc từ Tệp trong Java",
      view: 114,
      date: "11-04-2024",
    },
    {
      id: 3,
      title: "Tìm hiểu về @Conditional trong Spring",
      image: "https://media.techmaster.vn/api/static/P3QkezMU/llaHV2ON",
      content:
        "Trong hướng dẫn này, chúng ta sẽ xem xét chú thích @Condition...",
      view: 161,
      date: "11-04-2024",
    },
    {
      id: 4,
      title: "Enum trong Java",
      image: "https://media.techmaster.vn/api/static/P3QkezMU/J45NMGzZ",
      content: "Trong bài viết này chúng ta tìm hiểm về Eum trong Java",
      view: 186,
      date: "11-04-2024",
    },
    {
      id: 5,
      title: "Tìm hiểu cách tạo File trong Java",
      image: "https://media.techmaster.vn/api/static/P3QkezMU/1Ls_fZ3j",
      content:
        "Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo một Tệp mới trong Java",
      view: 74,
      date: "11-04-2024",
    },
    {
      id: 6,
      title: "@EntityScan vs @ComponentScan",
      image: "https://media.techmaster.vn/api/static/P3QkezMU/llaHV2ON",
      content:
        "Trong hướng dẫn ngắn này, chúng ta sẽ thảo luận về cách sử dụng @EntityScan và @ComponentScan trong Spring",
      view: 43,
      date: "11-04-2024",
    },
  ];
  return (
    <>
      <div className="container">
        {data.map(item=>
        <Cartcontent 
        item = {item}
        />
        )}
      </div>
    </>
  );
};

export default Content;
