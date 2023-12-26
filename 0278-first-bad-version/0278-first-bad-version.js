/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // 이진 검색의 검색 범위를 나타내는 두 개의 포인터인 left와 right를 초기화
        let left = 1, right = n;
        
        // 왼쪽과 오른쪽 포인터가 만날 때까지 이진 검색
        while(left < right) {
            // 중간 인덱스를 계산
            const mid = left + Math.floor((right - left) / 2);
            
            // 중간 인덱스의 버전이 나쁜 버전인지 확인
            if(isBadVersion(mid)) {
                // 만약 나쁜 버전이라면, 검색 범위를 왼쪽 반으로
                right = mid;
            } else {
                // 나쁜 버전이 아니라면, 검색 범위를 오른쪽 반으로
                left = mid + 1;
            }
        }
        
        // left 포인터를 반환. 이것이 첫 나쁜 버전
        return left;
    };
};