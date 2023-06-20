import type { SubmitFunction } from '@sveltejs/kit';

const subscribe: SubmitFunction = ({ form, data, action }) => {
  console.log(form, data, action);
  const test = Object.fromEntries(data);
  console.log(test);

  return async ({ result, update }) => {
    switch (result.type) {
      case 'success':
        console.log('yo');
        break;
      default:
        break;
    }
    await update();
  };
};

export default subscribe;
