import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT } from '../../../../../../config';

const messages = [
  "It's not too late to start!",
  'Off to a great start, keep going!',
  'Keep going!',
  'Keep it up!',
  'Nice work!',
  "Now, don't stop!",
  "Can't stop now",
  'So close!',
  'Nearing completion, go go go!',
  'Way to go!',
  "Now you're just showing off!"
];

/**
 * Get motivational message based on pull requests count.
 *
 * @param {*} pullRequestCount
 * @param {*} otherReposCount
 * @returns {string}
 */
function getMessage(pullRequestCount, otherReposCount) {
  const currentMonth = new Date().getMonth();

  if (currentMonth < 9) {
    return "Last year's result.";
  }

  if (currentMonth > 9) {
    return "This year's result.";
  }

  const isShowingOff = pullRequestCount > TOTAL_PR_COUNT && otherReposCount > TOTAL_OTHER_PR_COUNT;

  if (isShowingOff) {
    return messages[messages.length - 1];
  }

  return messages[pullRequestCount];
}

export default getMessage;
