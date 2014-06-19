;(function(exports) {
  var adjectives = [
    'adaptable', 'adorable', 'agreeable', 'alert', 'alluring', 'ambitious', 'amused',
    'blue', 'boundless', 'brave', 'bright',
    'calm', 'capable', 'charming', 'cheerful', 'coherent', 'comfortable', 'confident', 'cool', 'cooperative', 'courageous', 'credible', 'cultured', 'cyan',
    'dashing', 'dazzling', 'debonair', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'diligent', 'discreet', 'dynamic',
    'eager', 'efficient', 'elated', 'eminent', 'enchanting', 'encouraging', 'endurable', 'energetic', 'entertaining', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant',
    'fabulous', 'fair', 'faithful', 'fantastic', 'fearless', 'fine', 'frank', 'friendly', 'funny',
    'generous', 'gentle', 'glorious', 'good', 'green',
    'happy', 'harmonious', 'helpful', 'hilarious', 'honorable',
    'impartial', 'industrious', 'instinctive',
    'jolly', 'joyous',
    'kind', 'knowledgeable',
    'level', 'likeable', 'lively', 'lovely', 'loving', 'lucky',
    'mature', 'modern',
    'navy', 'nice',
    'obedient', 'orange',
    'painstaking', 'peaceful', 'perfect', 'pleasant', 'plucky', 'productive', 'protective', 'proud', 'punctual',
    'quiet', 'quirky',
    'receptive', 'reflective', 'relieved', 'resolute', 'responsible', 'rhetorical', 'righteous', 'romantic',
    'selective', 'sensitive', 'silent', 'silly', 'sincere', 'skilled', 'smiling', 'splendid', 'stimulating', 'successful', 'succinct',
    'talented', 'thoughtful', 'thrifty', 'tough', 'trustworthy',
    'unbiased', 'unusual', 'upbeat',
    'victorious', 'vigorous', 'vivacious',
    'warm', 'willing', 'wise', 'witty', 'wonderful',
    'zany', 'zealous', 'zen'
  ];

  var nouns = [
    'account', 'achiever', 'acoustics', 'act', 'action', 'activity', 'actor', 'addition', 'adjustment', 'advertisement', 'advice', 'aftermath', 'afternoon', 'afterthought', 'agreement', 'air', 'airplane', 'airport', 'alarm', 'amount', 'amusement', 'anger', 'angle', 'animal', 'answer', 'ant', 'apparatus', 'apparel', 'apple', 'appliance', 'approval', 'arch', 'argument', 'arithmetic', 'arm', 'army', 'art', 'attack', 'attempt', 'attention', 'attraction', 'aunt', 'authority',
    'baby', 'back', 'badge', 'bag', 'bait', 'balance', 'ball', 'balloon', 'banana', 'band', 'base', 'baseball', 'basin', 'basket', 'basketball', 'bat', 'bath', 'battle', 'bead', 'beam', 'bean', 'bear', 'beast', 'bed', 'bedroom', 'beds', 'bee', 'beef', 'beetle', 'beginner', 'behavior', 'belief', 'believe', 'bell', 'bells', 'berry', 'bike', 'bird', 'birth', 'birthday', 'bit', 'bite', 'blade', 'blood', 'blow', 'board', 'boat', 'body', 'bomb', 'bone', 'book', 'boot', 'border', 'bottle', 'boundary', 'box', 'boy', 'brain', 'brake', 'branch', 'brass', 'bread', 'breakfast', 'breath', 'brick', 'bridge', 'brother', 'brush', 'bubble', 'bucket', 'building', 'bulb', 'bun', 'burn', 'burst', 'bush', 'business', 'butter', 'button',
    'cabbage', 'cable', 'cactus', 'cake', 'calculator', 'calendar', 'camera', 'camp', 'can', 'cannon', 'canvas', 'cap', 'caption', 'car', 'card', 'care', 'carpenter', 'carriage', 'cars', 'cart', 'cast', 'cat', 'cause', 'cave', 'celery', 'cellar', 'cemetery', 'cent', 'chain', 'chair', 'chairs', 'chalk', 'chance', 'change', 'channel', 'cheese', 'cherries', 'cherry', 'chess', 'chicken', 'chickens', 'children', 'chin', 'church', 'circle', 'clam', 'clock', 'clocks', 'cloth', 'cloud', 'clouds', 'clover', 'club', 'coach', 'coal', 'coast', 'coat', 'cobweb', 'coil', 'collar', 'color', 'comb', 'comfort', 'committee', 'company', 'comparison', 'competition', 'condition', 'connection', 'control', 'cook', 'copper', 'copy', 'cord', 'cork', 'corn', 'cough', 'country', 'cover', 'cow', 'crack', 'cracker', 'crate', 'crayon', 'cream', 'creator', 'creature', 'credit', 'crib', 'crime', 'crook', 'crow', 'crowd', 'crown', 'crush', 'cry', 'cub', 'cup', 'current', 'curtain', 'curve', 'cushion',
    'dad', 'daughter', 'day', 'death', 'debt', 'decision', 'deer', 'degree', 'design', 'desire', 'desk', 'destruction', 'detail', 'development', 'dime', 'dinner', 'dinosaur', 'direction', 'dirt', 'discovery', 'discussion', 'disease', 'disgust', 'distance', 'distribution', 'division', 'dock', 'doctor', 'dog', 'doll', 'donkey', 'door', 'downtown', 'drain', 'drawer', 'dress', 'drink', 'driving', 'drop', 'drug', 'drum', 'duck', 'dust',
    'ear', 'earth', 'earthquake', 'edge', 'education', 'effect', 'egg', 'eggnog', 'elbow', 'end', 'engine', 'error', 'example', 'exchange', 'existence', 'expansion', 'experience', 'expert', 'eye', 'eyes',
    'face', 'fact', 'fairy', 'fall', 'family', 'fan', 'fang', 'farm', 'farmer', 'father', 'faucet', 'fear', 'feast', 'feather', 'feeling', 'feet', 'fiction', 'field', 'fifth', 'fight', 'finger', 'fingers', 'fire', 'fireman', 'fish', 'flag', 'flame', 'flavor', 'flesh', 'flight', 'flock', 'floor', 'flower', 'fly', 'fog', 'fold', 'food', 'foot', 'force', 'fork', 'form', 'fowl', 'frame', 'friction', 'friend', 'frog', 'front', 'fruit', 'fuel', 'furniture',
    'game', 'garden', 'gate', 'geese', 'ghost', 'giant', 'giraffe', 'girl', 'glass', 'glove', 'glue', 'goat', 'gold', 'goldfish', 'goose', 'government', 'governor', 'grade', 'grain', 'grandfather', 'grandmother', 'grape', 'grass', 'grip', 'ground', 'group', 'growth', 'guide', 'guitar', 'gun',
    'hair', 'haircut', 'hall', 'hammer', 'hand', 'hands', 'harbor', 'harmony', 'hat', 'hate', 'head', 'health', 'heart', 'heat', 'help', 'hen', 'hill', 'history', 'hobby', 'hole', 'holiday', 'home', 'honey', 'hook', 'hope', 'horn', 'horse', 'hose', 'hospital', 'hot', 'hour', 'house', 'humor',
    'ice', 'icicle', 'idea', 'impulse', 'income', 'increase', 'industry', 'ink', 'insect', 'instrument', 'insurance', 'interest', 'invention', 'iron', 'island',
    'jail', 'jam', 'jar', 'jeans', 'jelly', 'jellyfish', 'jewel', 'join', 'joke', 'journey', 'judge', 'juice', 'jump',
    'kettle', 'key', 'kick', 'kiss', 'kite', 'kitten', 'kitty', 'knee', 'knife', 'knot', 'knowledge',
    'laborer', 'lace', 'ladybug', 'lake', 'lamp', 'land', 'language', 'laugh', 'lawyer', 'lead', 'leaf', 'learning', 'leather', 'leg', 'legs', 'letter', 'lettuce', 'level', 'library', 'lift', 'light', 'limit', 'line', 'linen', 'lip', 'lips', 'liquid', 'list', 'lizard', 'loaf', 'lock', 'locket', 'look', 'loss', 'love', 'low', 'lumber', 'lunch', 'lunchroom',
    'machine', 'magic', 'maid', 'mailbox', 'man', 'manager', 'map', 'marble', 'mark', 'market', 'mask', 'mass', 'match', 'meal', 'measure', 'meat', 'meeting', 'memory', 'metal', 'middle', 'milk', 'mind', 'mine', 'minister', 'mint', 'minute', 'mist', 'mitten', 'mom', 'money', 'monkey', 'month', 'moon', 'morning', 'mother', 'motion', 'mountain', 'mouse', 'mouth', 'move', 'muscle', 'music',
    'nail', 'name', 'nation', 'neck', 'need', 'needle', 'nerve', 'nest', 'net', 'news', 'night', 'noise', 'north', 'nose', 'note', 'notebook', 'number', 'nut',
    'oatmeal', 'observation', 'ocean', 'offer', 'office', 'oil', 'operation', 'opinion', 'orange', 'order', 'organization', 'ornament', 'oven', 'owl', 'owner',
    'page', 'pail', 'pain', 'paint', 'pan', 'pancake', 'paper', 'parcel', 'parent', 'park', 'part', 'partner', 'party', 'passenger', 'paste', 'patch', 'payment', 'peace', 'pear', 'pen', 'pencil', 'person', 'pest', 'pet', 'pets', 'pickle', 'picture', 'pie', 'pig', 'pin', 'pipe', 'pizza', 'place', 'plane', 'plant', 'plantation', 'plastic', 'plate', 'play', 'playground', 'pleasure', 'plot', 'plough', 'pocket', 'point', 'poison', 'police', 'polish', 'pollution', 'popcorn', 'porter', 'position', 'pot', 'potato', 'powder', 'power', 'price', 'print', 'prison', 'process', 'produce', 'profit', 'property', 'prose', 'protest', 'pull', 'pump', 'punishment', 'purpose', 'push',
    'quarter', 'quartz', 'queen', 'question', 'quicksand', 'quiet', 'quill', 'quilt', 'quince', 'quiver',
    'rabbit', 'rail', 'railway', 'rain', 'rainstorm', 'rake', 'range', 'rat', 'rate', 'ray', 'reaction', 'reading', 'reason', 'receipt', 'recess', 'record', 'regret', 'relation', 'religion', 'representative', 'request', 'respect', 'rest', 'reward', 'rhythm', 'rice', 'riddle', 'rifle', 'ring', 'river', 'road', 'robin', 'rock', 'rod', 'roll', 'roof', 'room', 'root', 'rose', 'route', 'rub', 'rule', 'run',
    'sack', 'salt', 'sand', 'scale', 'scarecrow', 'scarf', 'scene', 'scent', 'school', 'science', 'scissors', 'screw', 'sea', 'seat', 'secretary', 'seed', 'selection', 'sense', 'servant', 'shade', 'shake', 'shame', 'shape', 'sheep', 'sheet', 'shelf', 'ship', 'shirt', 'shock', 'shoe', 'shop', 'show', 'side', 'sidewalk', 'sign', 'silk', 'silver', 'sink', 'sister', 'size', 'skate', 'skin', 'skirt', 'sky', 'slave', 'sleep', 'sleet', 'slip', 'slope', 'smash', 'smell', 'smile', 'smoke', 'snail', 'snake', 'sneeze', 'snow', 'soap', 'society', 'sock', 'soda', 'sofa', 'son', 'song', 'sort', 'sound', 'soup', 'space', 'spade', 'spark', 'spider', 'sponge', 'spoon', 'spot', 'spring', 'spy', 'square', 'squirrel', 'stage', 'stamp', 'star', 'start', 'statement', 'station', 'steam', 'steel', 'stem', 'step', 'stew', 'stick', 'stitch', 'stocking', 'stomach', 'stone', 'stop', 'store', 'story', 'stove', 'stranger', 'straw', 'stream', 'street', 'stretch', 'string', 'structure', 'substance', 'sugar', 'suggestion', 'suit', 'summer', 'support', 'surprise', 'sweater', 'swing', 'system',
    'table', 'tail', 'talk', 'tank', 'taste', 'tax', 'team', 'teeth', 'temper', 'tendency', 'tent', 'territory', 'test', 'texture', 'theory', 'thing', 'thought', 'thread', 'thrill', 'throat', 'throne', 'thumb', 'thunder', 'ticket', 'tiger', 'time', 'tin', 'title', 'toad', 'toe', 'tomato', 'tongue', 'tooth', 'toothbrush', 'toothpaste', 'top', 'touch', 'town', 'toy', 'toys', 'trade', 'trail', 'train', 'tramp', 'transport', 'tray', 'treatment', 'tree', 'trees', 'trick', 'trip', 'trouble', 'trousers', 'truck', 'tub', 'turkey', 'turn', 'twig', 'twist',
    'umbrella', 'uncle', 'underwear', 'unit',
    'vacation', 'value', 'van', 'vase', 'vegetable', 'veil', 'vein', 'verse', 'vessel', 'vest', 'view', 'visitor', 'voice', 'volcano', 'volleyball', 'voyage',
    'walk', 'wall', 'war', 'wash', 'waste', 'watch', 'water', 'wave', 'wax', 'way', 'wealth', 'weather', 'week', 'weight', 'wheel', 'whip', 'whistle', 'wilderness', 'wind', 'wine', 'wing', 'winter', 'wire', 'wish', 'woman', 'wood', 'wool', 'word', 'work', 'worm', 'wound', 'wren', 'wrench', 'wrist', 'writer',
    'xylem', 'xylophone',
    'yak', 'yam', 'yard', 'yarn', 'year', 'yoke',
    'zebra', 'zephyr', 'zinc', 'zipper', 'zoo'
  ];

  exports.generate = function randomName() {
    var i = Math.floor(Math.random() * adjectives.length);
    var j = Math.floor(Math.random() * nouns.length);
    return '' + adjectives[i] + '-' + nouns[j];
  }
})(this);