import useDisabledOpenInspect from './hooks/useDisabledOpenInspect';

export const App = () => {
  useDisabledOpenInspect();


  return (
    <div>
      <h1 className="text-3xl font-bold flex items-center justify-center h-screen font-matemaise">
        Monir's Piggy Bank
      </h1>

    </div>
  );
};
