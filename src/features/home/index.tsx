import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/error-fallback";
import News from "@/features/home/components/news";
import Latest from "@/features/home/components/latest";
import { useState } from "react";
import S from "./styled";
import { LatestItemType } from "@/types/api";
import { useLatestAdditions } from "./api/get-latest-additions";

const Home = () => {
  const [additionsType, setAdditionsType] = useState<LatestItemType>('bands');
  const [updatesType, setUpdatesType] = useState<LatestItemType>('bands');

  const showTab = (category: LatestItemType) => {
    setAdditionsType(category);
  };

  return (
    <>
      <div className="right-element">
        <News />
      </div>
      <S.RightContainer>
        <div>
          <button
            onClick={() => showTab('bands')}
            className={additionsType === 'bands' ? 'active' : ''}
          >
            Bands
          </button>
          <button
            onClick={() => showTab('labels')}
            className={additionsType === 'labels' ? 'active' : ''}
          >
            Labels
          </button>
          <button
            onClick={() => showTab('artists')}
            className={additionsType === 'artists' ? 'active' : ''}
          >
            Artists
          </button>
        </div>

        <div>
          <h2>Latest additions</h2>
          <Latest
            additionType={additionsType}
            useQueryFunction={useLatestAdditions} />
        </div>

        <div>
          <h2>Latest updates</h2>
          <Latest
            additionType={updatesType}
            useQueryFunction={useLatestAdditions} />
        </div>
      </S.RightContainer>
    </>
  );
};

export default withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback
});
