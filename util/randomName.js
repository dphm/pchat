;(function(exports) {
  var adjectives = [
    'acceptable', 'actual', 'adaptable', 'adorable', 'aerial', 'affectionate', 'agile', 'agreeable', 'alert', 'alluring', 'ambidextrous', 'ambitious', 'amused', 'amusing', 'aquatic', 'artistic', 'authentic', 'avid', 'awakening',
    'baggy', 'big', 'bionic', 'beautiful', 'blissful', 'blooming', 'boundless', 'bountiful', 'brave', 'bright', 'brilliant', 'burning',
    'calm', 'capable', 'charming', 'cheerful', 'chic', 'civil', 'coherent', 'comfortable', 'compassionate', 'competent', 'confident', 'content', 'cool', 'cooperative', 'courageous', 'credible', 'cultured', 'cute', 'cyan',
    'dashing', 'dazzling', 'dear', 'debonair', 'decent', 'decisive', 'delightful', 'detailed', 'determined', 'diligent', 'discreet', 'dynamic',
    'eager', 'eastern', 'efficient', 'elated', 'eloquent', 'eminent', 'empathetic', 'enchanting', 'encouraging', 'endurable', 'energetic', 'entertaining', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'extraordinary', 'exuberant',
    'fabulous', 'fair', 'faithful', 'fantastic', 'fearless', 'fine', 'frank', 'friendly', 'funny',
    'generous', 'genuine', 'gentle', 'glorious', 'good', 'gorgeous', 'grand', 'great', 'green',
    'happy', 'harmonious', 'healthy', 'hearty', 'helpful', 'heroic', 'hilarious', 'honorable', 'humble',
    'incredible', 'inspirational', 'impartial', 'industrious', 'instinctive', 'inventive', 'ionic',
    'joking', 'jolly', 'joyous', 'jumping',
    'kind', 'knowledgeable',
    'level', 'light', 'likeable', 'lively', 'logical', 'loveable', 'lovely', 'loving', 'lucky', 'luminous',
    'magical', 'magnetic', 'marvelous', 'mature', 'merciful', 'mindful', 'modern',
    'navy', 'neat', 'new', 'nice', 'northern',
    'obedient', 'omnipotent', 'orange',
    'peaceful', 'perfect', 'playful', 'pleasant', 'plucky', 'polished', 'positive', 'precious', 'pretty', 'productive', 'professional', 'protective', 'proud', 'punctual',
    'quick', 'quiet', 'quirky',
    'radiant', 'receptive', 'refined', 'reflective', 'relieved', 'resolute', 'responsible', 'retro', 'rhetorical', 'rich', 'righteous', 'ripe', 'robust', 'romantic', 'rowdy',
    'salty', 'satisfactory', 'satisfying', 'selective', 'sensitive', 'sharp', 'sick', 'silent', 'silly', 'sincere', 'skilled', 'smiling', 'smooth', 'solid', 'southern', 'sparkling', 'splendid', 'spontaneous', 'stimulating', 'stylish', 'sublime', 'subtle', 'successful', 'succinct', 'sweet', 'sympathetic',
    'talented', 'tender', 'thoughtful', 'thrifty', 'ticklish', 'tiny', 'tough', 'tranquil', 'trustworthy',
    'unacceptable', 'unbiased', 'unique', 'unusual', 'upbeat',
    'victorious', 'vigorous', 'virtuous', 'vivacious', 'voluminous', 'voluptuous',
    'warm', 'western', 'wicked', 'willing', 'wise', 'witty', 'wonderful',
    'zany', 'zealous', 'zen'
  ];

  var nouns = [
    'aardvark', 'account', 'achiever', 'act', 'action', 'activity', 'actor', 'addition', 'adjustment', 'advertisement', 'advice', 'aftermath', 'afternoon', 'afterthought', 'agreement', 'air', 'airplane', 'airport', 'alarm', 'algorithm', 'amount', 'amusement', 'anger', 'angle', 'animal', 'answer', 'ant', 'apparatus', 'apparel', 'apple', 'appliance', 'approval', 'arch', 'archer', 'argument', 'arithmetic', 'arm', 'army', 'art', 'artist', 'attack', 'attempt', 'attention', 'attraction', 'authority',
    'baby', 'baboon', 'back', 'badge', 'bag', 'bait', 'balance', 'ball', 'balloon', 'banana', 'band', 'base', 'baseball', 'basin', 'basket', 'basketball', 'bat', 'bath', 'battle', 'bead', 'beam', 'bean', 'bear', 'beast', 'beaver', 'bed', 'bedroom', 'bee', 'beef', 'beetle', 'beginner', 'behavior', 'belief', 'believe', 'bell', 'berry', 'bike', 'bird', 'birth', 'birthday', 'bit', 'bite', 'blade', 'blood', 'board', 'boat', 'body', 'bomb', 'bone', 'book', 'boot', 'border', 'bottle', 'boundary', 'box', 'brain', 'brake', 'branch', 'brass', 'bread', 'breakfast', 'breath', 'brick', 'bridge', 'brush', 'bubble', 'bucket', 'building', 'bulb', 'bun', 'bundle', 'burn', 'burst', 'bush', 'business', 'butter', 'button',
    'cabbage', 'cable', 'cactus', 'cake', 'calculator', 'calendar', 'camera', 'camp', 'can', 'cannon', 'canvas', 'cap', 'caption', 'car', 'card', 'carnival', 'care', 'carpenter', 'carriage', 'cart', 'cast', 'cat', 'cause', 'cave', 'celery', 'cellar', 'cemetery', 'cent', 'chain', 'chair', 'chalk', 'chance', 'change', 'channel', 'cheese', 'chef', 'cherry', 'chess', 'chicken', 'child', 'chin', 'church', 'circle', 'clam', 'clock', 'cloth', 'cloud', 'clover', 'club', 'coach', 'coal', 'coast', 'coat', 'cobweb', 'coil', 'collar', 'color', 'comb', 'comfort', 'committee', 'company', 'comparison', 'competition', 'computer', 'condition', 'connection', 'control', 'cook', 'copper', 'copy', 'cord', 'corgi', 'cork', 'corn', 'cough', 'country', 'cover', 'cow', 'crack', 'cracker', 'crate', 'crayon', 'cream', 'creator', 'creature', 'credit', 'crib', 'crime', 'crook', 'crow', 'crowd', 'crown', 'crush', 'cry', 'cub', 'cube', 'cup', 'current', 'curtain', 'curve', 'cushion',
    'dad', 'daughter', 'day', 'death', 'debt', 'decision', 'deer', 'degree', 'design', 'designer', 'desire', 'desk', 'desert', 'dessert', 'destruction', 'detail', 'development', 'dime', 'dinner', 'dinosaur', 'direction', 'director', 'dirt', 'discovery', 'discussion', 'disease', 'disgust', 'distance', 'distribution', 'division', 'dock', 'doctor', 'dog', 'doll', 'donkey', 'door', 'downtown', 'drain', 'drawer', 'dress', 'drink', 'driving', 'drop', 'drug', 'drum', 'duck', 'dungeon', 'dust',
    'ear', 'earth', 'earthquake', 'edge', 'education', 'effect', 'egg', 'eggnog', 'elbow', 'elephant', 'elf', 'email', 'end', 'engine', 'eraser', 'error', 'example', 'exchange', 'existence', 'expansion', 'experience', 'expert', 'eye', 'eyes',
    'face', 'fact', 'fairy', 'fall', 'family', 'fan', 'fang', 'farm', 'farmer', 'faucet', 'fear', 'feast', 'feather', 'feeling', 'feet', 'fiction', 'field', 'fifth', 'fight', 'finger', 'fire', 'firefighter', 'fish', 'flag', 'flame', 'flavor', 'flesh', 'flight', 'flock', 'floor', 'flower', 'fly', 'fog', 'fold', 'food', 'foot', 'force', 'fork', 'form', 'fowl', 'frame', 'friction', 'friend', 'frog', 'front', 'fruit', 'fuel', 'function', 'furniture',
    'game', 'garden', 'gate', 'geese', 'gem', 'ghost', 'giant', 'giraffe', 'glass', 'glove', 'glue', 'goat', 'gold', 'goldfish', 'goose', 'government', 'governor', 'grade', 'grain', 'grape', 'grass', 'grip', 'ground', 'group', 'growth', 'guide', 'guitar', 'gun',
    'hair', 'haircut', 'hall', 'hammer', 'hand', 'hands', 'harbor', 'harmony', 'hat', 'hate', 'head', 'health', 'heart', 'heat', 'help', 'hen', 'hill', 'history', 'hobby', 'holiday', 'home', 'honey', 'hook', 'hope', 'horn', 'horse', 'hose', 'hospital', 'hot', 'hour', 'house', 'human', 'humor',
    'ice', 'icicle', 'idea', 'impulse', 'income', 'increase', 'industry', 'ink', 'insect', 'instrument', 'insurance', 'interest', 'invention', 'iron', 'island',
    'jail', 'jam', 'jar', 'jeans', 'jelly', 'jellyfish', 'jewel', 'join', 'joke', 'journey', 'judge', 'juice', 'jump',
    'kettle', 'key', 'kick', 'kiss', 'kite', 'kitten', 'kitty', 'knee', 'knife', 'knight', 'knot', 'knowledge',
    'lace', 'ladybug', 'lake', 'lamp', 'land', 'landmark', 'language', 'laugh', 'lawyer', 'lead', 'leaf', 'learning', 'leather', 'leg', 'legs', 'lemon', 'letter', 'lettuce', 'level', 'library', 'lift', 'light', 'limit', 'line', 'linen', 'lip', 'lips', 'liquid', 'list', 'lizard', 'loaf', 'lock', 'locket', 'look', 'loss', 'love', 'low', 'lumber', 'lunch', 'lunchroom',
    'machine', 'mage', 'magic', 'magician', 'mailbox', 'manager', 'map', 'marble', 'mark', 'market', 'mask', 'mass', 'match', 'meal', 'measure', 'meat', 'meeting', 'memory', 'metal', 'middle', 'milk', 'mind', 'mine', 'minister', 'mint', 'minute', 'mist', 'mitten', 'mom', 'money', 'monkey', 'month', 'moon', 'moose', 'morning', 'motion', 'mountain', 'mouse', 'mouth', 'move', 'muscle', 'music',
    'nail', 'name', 'nation', 'neck', 'need', 'needle', 'nerve', 'nest', 'net', 'news', 'night', 'noise', 'north', 'nose', 'note', 'notebook', 'number', 'nut',
    'oatmeal', 'observation', 'ocean', 'offer', 'office', 'oil', 'operation', 'opinion', 'orange', 'order', 'organization', 'ornament', 'oven', 'owl', 'owner',
    'page', 'pail', 'pain', 'paint', 'pan', 'pancake', 'paper', 'parcel', 'parent', 'park', 'part', 'partner', 'party', 'passenger', 'paste', 'patch', 'payment', 'peace', 'pear', 'pen', 'pencil', 'person', 'pickle', 'picture', 'pie', 'pig', 'pin', 'pipe', 'pizza', 'place', 'plane', 'plant', 'plantation', 'plastic', 'plate', 'play', 'playground', 'pleasure', 'plot', 'plough', 'pocket', 'point', 'poison', 'police', 'polish', 'pollution', 'popcorn', 'porter', 'position', 'pot', 'potato', 'powder', 'power', 'price', 'print', 'prison', 'process', 'produce', 'professional', 'profit', 'program', 'programmer', 'property', 'prose', 'protest', 'pull', 'pump', 'punishment', 'purpose', 'push',
    'quarter', 'quarry', 'quartz', 'question', 'quicksand', 'quill', 'quilt', 'quirk', 'quiver',
    'rabbit', 'raccoon', 'rail', 'railway', 'rain', 'rainstorm', 'rake', 'range', 'rat', 'ray', 'reaction', 'reading', 'reason', 'receipt', 'recess', 'record', 'regret', 'relation', 'religion', 'representative', 'request', 'respect', 'rest', 'reward', 'rhino', 'rhythm', 'rice', 'riddle', 'rifle', 'ring', 'river', 'road', 'robin', 'rock', 'rod', 'roll', 'roof', 'room', 'root', 'rose', 'route', 'ruby', 'rule', 'run',
    'sack', 'salt', 'sand', 'scale', 'scarecrow', 'scarf', 'scene', 'scent', 'school', 'science', 'scissors', 'screw', 'sea', 'season', 'seat', 'secretary', 'seed', 'selection', 'sense', 'servant', 'shade', 'shake', 'shame', 'shape', 'sheep', 'sheet', 'shelf', 'ship', 'shirt', 'shock', 'shoe', 'shop', 'show', 'side', 'sidewalk', 'sign', 'silk', 'silver', 'sink', 'size', 'skate', 'skin', 'skirt', 'sky', 'sleep', 'sleet', 'slip', 'slope', 'smash', 'smell', 'smile', 'smoke', 'snail', 'snake', 'sneeze', 'snow', 'soap', 'society', 'sock', 'soda', 'sofa', 'son', 'song', 'sort', 'sound', 'soup', 'space', 'spade', 'spark', 'spider', 'sponge', 'spoon', 'spot', 'spring', 'spy', 'square', 'squirrel', 'sriracha', 'stage', 'stamp', 'star', 'start', 'statement', 'station', 'steam', 'steel', 'stem', 'step', 'stew', 'stick', 'stitch', 'stocking', 'stomach', 'stone', 'stop', 'store', 'story', 'stove', 'stranger', 'straw', 'stream', 'street', 'stretch', 'string', 'structure', 'substance', 'sugar', 'suggestion', 'suit', 'summer', 'support', 'surprise', 'sweater', 'swing', 'system',
    'table', 'tail', 'talk', 'tank', 'taste', 'tax', 'team', 'teeth', 'temper', 'tendency', 'tent', 'territory', 'test', 'text', 'texture', 'theory', 'thing', 'thought', 'thread', 'thrill', 'throat', 'throne', 'thumb', 'thunder', 'ticket', 'tiger', 'time', 'tin', 'title', 'toad', 'toe', 'tomato', 'tongue', 'tooth', 'toothbrush', 'toothpaste', 'top', 'touch', 'town', 'toy', 'trade', 'trail', 'train', 'trampoline', 'transport', 'tray', 'treatment', 'tree', 'trick', 'trip', 'trouble', 'trousers', 'truck', 'tub', 'turkey', 'turn', 'twig', 'twist',
    'umbrella', 'underwear', 'unit', 'utter',
    'vacation', 'value', 'van', 'vase', 'vegetable', 'veil', 'vein', 'verse', 'vessel', 'vest', 'view', 'visitor', 'voice', 'volcano', 'volleyball', 'voyage',
    'walk', 'wall', 'war', 'warlock', 'warrior', 'wash', 'waste', 'watch', 'water', 'wave', 'wax', 'way', 'wealth', 'weather', 'week', 'weight', 'wheel', 'whip', 'whistle', 'wilderness', 'wind', 'wine', 'wing', 'wink', 'winter', 'wire', 'wish', 'witch', 'wizard', 'wood', 'wool', 'word', 'work', 'worm', 'wound', 'wren', 'wrench', 'wrist', 'writer',
    'xenon', 'xylem', 'xylophone',
    'yak', 'yam', 'yard', 'yarn', 'year', 'yolk',
    'zebra', 'zephyr', 'zigzag', 'zinc', 'zipper', 'zoo'
  ];

  exports.generate = function () {
    var i = Math.floor(Math.random() * adjectives.length);
    var j = Math.floor(Math.random() * nouns.length);
    return '' + adjectives[i] + '-' + nouns[j];
  }
})(this);
