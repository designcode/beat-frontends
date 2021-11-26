import { useEffect, useRef } from "react";
import { debounce } from '@beat-frontends/shared/utils';

type InfiniteScrollProps = {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
};

const isBottom = (ref: React.RefObject<HTMLDivElement>) =>
  ref.current
    ? ref.current.getBoundingClientRect().bottom <= window.innerHeight
    : false;

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    const debouncedScroll = debounce(onScroll, 500);
    document.addEventListener('scroll', debouncedScroll);
    return () => document.removeEventListener('scroll', debouncedScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div ref={contentRef}>{children}</div>;
};
