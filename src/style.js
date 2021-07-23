const styles = {
  shimmer: {
    background: '#3a333d',
    display: 'inline-block',
    backgroundImage: 'linear-gradient(to right,#3a333d 40%,#dddddd 50%,#3a333d 60%)',
    backgroundSize: '800px 104px',
    backgroundRepeat: 'no-repeat',
    animation: 'shimmerAnim 2s infinite linear',
  },
  '@keyframes shimmerAnim': {
    '0%': {
      backgroundPosition: '-468px 0',
    },
    '100%': {
      backgroundPosition: '468px 0',
    },
  },
};

export default styles;
