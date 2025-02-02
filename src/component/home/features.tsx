import React from "react";

// Component
const Features: React.FC = () => {
  return (
    <div>
      <div className="text-center mt-4 md:my-12">
        <p className="text-lg md:text-xl lg:text-2xl font-extrabold">
          {" "}
          {"journy"}
        </p>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-2 md:mt-5 leading-tight">
          {"workflow builder your commmunicatione with AI-power"}
        </h1>
      </div>
    </div>
  );
};

export default Features;
// GraphQL query
// export const query = graphql`
//  query MyQuery {
//     strapi {
//       featuresHeadlines {
//         data {
//           id
//           attributes {
//             features {
//               data {
//                 id
//                 attributes {
//                   header
//                   dicription
//                   subtitle
//                   mediaUrl {
//                     data {
//                       attributes {
//                         previewUrl
//                         url
//                         width
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
