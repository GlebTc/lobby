import axios from 'axios';

const handleSubmit = async (e: any) => {
  // console.log('Submitting Form');
  // e.preventDefault();
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     accept: 'application/json',
  //     revision: '2024-05-15',
  //     'content-type': 'application/json',
  //   },
  //   data: {
  //     data: {
  //       type: 'profile',
  //       attributes: {
  //         email: 'test@test.com',
  //         properties: { newKey: 'New Value' },
  //       },
  //       meta: {
  //         patch_properties: {
  //           append: { newKey: 'New Value' },
  //           unappend: { newKey: 'New Value' },
  //           unset: 'skus',
  //         },
  //       },
  //     },
  //   },
  // };

  // try {
  //   const response = await axios.post(
  //     'https://a.klaviyo.com/client/profiles/?company_id=VuSfRM',
  //     options.data,
  //     { headers: options.headers }
  //   );

  //   console.log('Response:', response);
  //   // Handle successful response
  // } catch (error) {
  //   console.error('Error subscribing to newsletter:', error);
  //   // Handle error
  // }

  return <div>handleSubmit</div>;
};

export default handleSubmit;
