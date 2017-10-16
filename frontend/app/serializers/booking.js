import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        rental: { embedded: 'always' },
        // primaryKey: '_id'
    }

});
