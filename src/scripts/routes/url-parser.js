const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const spliteUrl = this._urlSplitter(url);
    return this._urlCombiner(spliteUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(spliteUrl) {
    return (
      (spliteUrl.resource ? `/${spliteUrl.resource}` : '/') +
      (spliteUrl.id ? `/:id` : '') +
      (spliteUrl.verb ? `/${spliteUrl.verb}` : '')
    );
  },
};

export default UrlParser;
